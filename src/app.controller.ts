import { Controller, Get, Post, Res, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express'; // Import Request for type
import * as fs from 'fs';
import * as path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  index(@Res() res: Response): void {
    const filePath = path.join(__dirname, '..', 'public', 'home.html');

    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.status(500).send('Error reading HTML file');
        return;
      }

      res.setHeader('Content-Type', 'text/html');
      res.send(data);
    });
  }

  @Post('verify')
  verify(@Req() request: Request, @Res() res: Response): void {
    const userCookie = request.headers['cookie'];

    if (userCookie) {
      const cookies = userCookie.split(';');

      const tgAuthResultCookie = cookies.find(cookie => cookie.trim().startsWith('tgAuthResult='));

      if (tgAuthResultCookie) {
        const tgAuthResultValue = tgAuthResultCookie.split('=')[1];

        const decoded = Buffer.from(tgAuthResultValue, 'base64url').toString('utf-8');
        const jsonString = decodeURIComponent(decoded);

      } else {
        console.log('tgAuthResult cookie not found');
      }

    } else {
      console.log('No cookies found');
    }
      res.cookie('myCookie', 'cookieValue', {
      domain: 'https://login.panana.app', // Set the domain to your server's domain
      httpOnly: false,    // Cookie is only accessible through the HTTP protocol
      secure: false,     // Set to 'true' if using HTTPS
      maxAge: 36000000,   // 1 hour
    });
     res.redirect('https://login.panana.app/fly');
  }

  @Get('fly')
  fly(@Req() request: Request, @Res() res: Response): void {
  const filePath = path.join(__dirname, '..', 'public', 'fly.html');

  const userCookie = request.headers['cookie'];

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading HTML file');
      return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.send(data);
  });
  }
  
}
