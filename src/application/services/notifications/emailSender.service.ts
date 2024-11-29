import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export default class EmailSenderService {
  private transporter: any;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get('SMTP_HOST'),
      port: +this.configService.get('SMTP_PORT'),
      secure: this.configService.get('SMTP_SECURE') === 'true',
      auth: {
        user: this.configService.get('SMTP_USER'),
        pass: this.configService.get('SMTP_PASS'),
      },
    });
  }

  public async sendEmail(email: string, content: string, subject:string): Promise<void> {
    console.log(`Sending email to ${email}`);
    await this.transporter.sendMail({
      from: this.configService.get('SMTP_USER'),
      to: email,
      subject,
      html: content,
    });
  }

}