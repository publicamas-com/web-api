import { Inject } from '@nestjs/common';
import { Optional } from 'typescript-optional';
import { UserModel } from '../../../domain/model';
import SignUpCommand from '../../commands/users/signUp.command';
import { UserRepositoryInterface } from '../../../domain/ports/repository/user/user.repository.interface';
import UserFactory from '../../factories/users/user.factory';
import { UserExistsException } from '../../../domain/exceptions/userExists.exception';
import NotificationService from '../../services/notifications/notification.service';
import { CustomHttpException } from '../../../domain/exceptions/customHttp.exception';
import { RoleId } from '../../../domain/model/users/constants/roleId';
import { PublicamasException } from '../../../domain/exceptions/publicamas.exception';
import { HttpStatusCodesConstants } from '../../../domain/constants/httpStatusCodes.constants';

export default class SignUpUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface,
    @Inject()
    private readonly userFactory: UserFactory,
    @Inject()
    private readonly notificationService: NotificationService,
  ) {
  }

  public async handler(signUpRequest: SignUpCommand): Promise<Optional<UserModel>> {
    const userModel = this.userFactory.createUserModelFromSignUpCommand(signUpRequest);
    const optPersistedUser = await this.userRepository.findUserByEmail(userModel.email);
    if (optPersistedUser.isPresent()) {
      throw new UserExistsException(userModel.email);
    }
    userModel.roleId = RoleId.USER;
    const createdUser = await this.userRepository.createUser(userModel);
    try{
      await this.notificationService.sendSignUpEmail(createdUser.orElseThrow(() => new CustomHttpException()));
    } catch (error) {
      //TODO replace by logger
      console.error("Error creating the user (Sending the notification)", error);
      throw new PublicamasException("Error creating the user (Sending the notification)", HttpStatusCodesConstants.INTERNAL_SERVER_ERROR )
    }
    return createdUser;
  };
}