import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from '../../../domain/model';
import EmailSenderService from './emailSender.service';

@Injectable()
export default class NotificationService {
  constructor(
    @Inject()
    private readonly emailSender: EmailSenderService) {
  }

  public async sendSignUpEmail(userM: UserModel): Promise<void> {
    console.log(`Sending email to ${userM.email}`);
    await this.emailSender.sendEmail(userM.email, 'Welcome to our platform');
  }
}