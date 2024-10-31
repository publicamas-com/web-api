import { Inject } from '@nestjs/common';
import { Optional } from 'typescript-optional';
import { UserModel } from '../../../domain/model';
import SignUpCommand from '../../commands/users/signUp.command';
import { UserRepositoryInterface } from '../../../domain/ports/repository/user/user.repository.interface';

export default class SignUpUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface,
  ) {

  }

  public async handler(signUpRequest:SignUpCommand): Promise<Optional<UserModel>> {
    return Optional.of(new UserModel());
    // return this.accountRepository.getAccountById(accountId);
  }
}