import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHtml(@Res() res: Response): void {
    // Get HTML content from the service
    console.log('Serving HTML content');
    const htmlContent = this.appService.getHtmlContent();
    
    // Send the HTML response
    res.send(htmlContent);
  }

  @Post('auth/verify')
  async login(@Body() Body, @Res() res: Response) {

    console.log('Received login request:', Body.tgAuthResult);
    res.cookie('auth_token', 'skyhi', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 3600000,
    });

    // Send response with a message
    return res.status(200);
  }

}
