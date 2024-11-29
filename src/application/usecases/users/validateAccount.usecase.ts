import { Inject } from '@nestjs/common';
import { UserRepositoryInterface } from '../../../domain/ports/repository/user/user.repository.interface';
import { Optional } from 'typescript-optional';
import { UserModel } from '../../../domain/model';
import ValidateUserAccountCommand from '../../commands/users/validateUserAccount.command';
import { PublicamasException } from '../../../domain/exceptions/publicamas.exception';
import { HttpStatusCodesConstants } from '../../../domain/constants/httpStatusCodes.constants';

export default class ValidateAccountUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface,
  ) {
  }


  public async handler(validateUserAccountCommand: ValidateUserAccountCommand): Promise<Optional<UserModel>> {
    const result = await this.userRepository.findUserByValidationCode(validateUserAccountCommand.code);
    if (result.isEmpty()) {
      throw new PublicamasException('Invalid code', HttpStatusCodesConstants.BAD_REQUEST);
    }
    const user = result.get();
    user.emailVerifiedAt = new Date();
    user.verificationCode = null;
    return await this.userRepository.updateUser(user);
  }
}