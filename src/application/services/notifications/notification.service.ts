import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from '../../../domain/model';
import EmailSenderService from './emailSender.service';
import * as handlebars from 'handlebars';
import * as path from 'node:path';
import * as fs from 'node:fs';

// Intenta con la importación por defecto primero.
import juice from 'juice';

const EMAIL_TEMPLATES_BASE_URL = './templates/email';
const SIGN_UP = 'signup.template.hbs';

@Injectable()
export default class NotificationService {
  constructor(
    @Inject()
    private readonly emailSender: EmailSenderService
  ) {}

  public async sendSignUpEmail(userM: UserModel): Promise<void> {
    try {
      console.log(`Sending email to ${userM.email}`);
      const templatePath = path.join(process.cwd(), EMAIL_TEMPLATES_BASE_URL, SIGN_UP);
      console.log(`Template path: ${templatePath}`);
      const templateSource = fs.readFileSync(templatePath, 'utf-8');
      const compiledTemplate = handlebars.compile(templateSource);
      const emailHtml = compiledTemplate({ firstName: userM.firstName, lastName: userM.lastName, verificationCode: userM.verificationCode });
      await this.emailSender.sendEmail(userM.email, emailHtml, 'Bienvenido a Publicamas');

    } catch (error) {
      // Handle and log any errors
      console.error(`Failed to send email to ${userM.email}: ${error.message}`);
      throw error;
    }
  }
}