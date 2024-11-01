import { UserModel } from '../../../model';
import { Optional } from 'typescript-optional';

export interface UserRepositoryInterface {
  findUserByEmail(email: string): Promise<Optional<UserModel>>;

  createUser(userModel: UserModel): Promise<Optional<UserModel>>;

  findUserByValidationCode(code: string): Promise<Optional<UserModel>>;

  updateUser(user: UserModel): Promise<Optional<UserModel>>;
}