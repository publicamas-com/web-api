import { Inject } from '@nestjs/common';
import { UserRepositoryInterface } from '../../../domain/ports/repository/user/user.repository.interface';
import { GetUserResponse } from '../../responses/user';

export default class GetUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepository: UserRepositoryInterface,
  ) {
  }

  public async handler (userId: string) : Promise<GetUserResponse> {

    const optPersistedUser = await this.userRepository.findUserById(userId);

    if (!optPersistedUser.isPresent()) {
      console.warn(`User with id ${userId} not found`);
      throw new Error("User not found");
    }

    const user = optPersistedUser.get();
    return new GetUserResponse(user.id, user.firstName, user.lastName, user.email, user.photoUrl,  user.createdAt);

  }

}