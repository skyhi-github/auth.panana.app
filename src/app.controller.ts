import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHtml(@Res() res: Response): void {
    // Get HTML content from the service
    const htmlContent = this.appService.getHtmlContent();
    
    // Send the HTML response
    res.send(htmlContent);
  }
}
