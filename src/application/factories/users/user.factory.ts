import SignUpCommand from '../../commands/users/signUp.command';
import { UserModel } from '../../../domain/model';
import { Injectable } from '@nestjs/common';
import { PasswordHasher } from '../../../domain/utils/passwordHasher.utils';

@Injectable()
export default class UserFactory {
  public createUserModelFromSignUpCommand(signUpCommand: SignUpCommand): UserModel {
    const userModel = new UserModel();
    userModel.firstName = signUpCommand.firstName;
    userModel.lastName = signUpCommand.lastName;
    userModel.email = signUpCommand.email;
    userModel.hash = PasswordHasher.hashPassword(signUpCommand.password);
    return userModel;
  }
}