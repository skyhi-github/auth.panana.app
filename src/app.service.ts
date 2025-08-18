import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHtmlContent(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>HTML Response from Service</title>
        </head>
        <body>
          <h1>Welcome to NestJS Service</h1>
          <p>This HTML content is generated from a service!</p>
        </body>
      </html>
    `;
  }
}
