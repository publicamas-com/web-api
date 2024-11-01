import { Inject } from '@nestjs/common';
import { Optional } from 'typescript-optional';
import { UserModel } from '../../../domain/model';
import { UserRepositoryInterface } from '../../../domain/ports/repository/user/user.repository.interface';
import { PublicamasException } from '../../../domain/exceptions/publicamas.exception';
import { HttpStatusCodesConstants } from '../../../domain/constants/httpStatusCodes.constants';
import * as jwt from 'jsonwebtoken';
import SignInCommand from '../../commands/users/signIn.command';
import { PasswordHasher } from '../../../domain/utils/passwordHasher.utils';
import { SignInResponse } from '../../responses/user/signIn.response';

export default class SignInUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface,
  ) {}

  public async handler(signInCommand: SignInCommand): Promise<SignInResponse> {
    const optPersistedUser = await this.userRepository.findUserByEmail(signInCommand.email);

    if (!optPersistedUser.isPresent()) {
      console.warn(`User with email ${signInCommand.email} not found`);
      throw new PublicamasException("Bad credentials", HttpStatusCodesConstants.UNAUTHORIZED);
    }

    const user: UserModel = optPersistedUser.get();
    const areValidCredentials = PasswordHasher.comparePassword(signInCommand.password, user.hash);
    if (!areValidCredentials) {
      console.warn(`Invalid password for user with email ${signInCommand.email}`);
      throw new PublicamasException("Bad credentials", HttpStatusCodesConstants.UNAUTHORIZED);
    }
    const payload = { userId: user.id, email: user.email, roles: user.roleId };
    const secretKey = process.env.JWT_SECRET;
    const refreshSecretKey = process.env.REFRESH_TOKEN_SECRET;
    if (!secretKey || !refreshSecretKey) {
      console.error('Missing JWT_SECRET or REFRESH_TOKEN_SECRET key in env variables')
      throw new PublicamasException("Error authenticating the user", HttpStatusCodesConstants.INTERNAL_SERVER_ERROR);
    }
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    const refreshToken = jwt.sign(payload, refreshSecretKey, { expiresIn: '30d' });
    //TODO Aquí deberías almacenar el refreshToken en tu base de datos si quieres poder invalidarlo más tarde
    return new SignInResponse(token, refreshToken);
  }
}