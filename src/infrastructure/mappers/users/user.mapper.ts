import { Optional } from 'typescript-optional';
import { UserModel } from '../../../domain/model';
import { UserEntity } from '../../adapters/repository/user/entity/user.entity';


export default class UserMapper {
  static fromEntityToModel(userEntity: UserEntity): Optional<UserModel> {
    if (!userEntity) {
      return Optional.empty();
    }
    let userM = new UserModel();
    userM.id = userEntity.id;
    userM.roleId = userEntity.roleId;
    userM.isLockedTransactions = userEntity.isLockedTransactions;
    userM.firstName = userEntity.firstName;
    userM.lastName = userEntity.lastName;
    userM.email = userEntity.email;
    userM.hash = userEntity.hash;
    userM.photoUrl = userEntity.photoUrl;
    userM.emailVerifiedAt = userEntity.emailVerifiedAt;
    userM.muteSounds = userEntity.muteSounds;
    userM.isLocked = userEntity.isLocked;
    userM.badAttempts = userEntity.badAttempts;
    userM.lastLogin = userEntity.lastLogin;
    userM.verificationCode = userEntity.verificationCode;
    userM.deletedAt = userEntity.deletedAt;
    userM.createdAt = userEntity.createdAt;
    userM.updatedAt = userEntity.updatedAt;
    return Optional.of(userM);
  }

  static fromModelToEntity(userModel: UserModel): UserEntity {
    let userE = new UserEntity();
    userE.id = userModel.id;
    userE.roleId = userModel.roleId;
    userE.verificationCode = userModel.verificationCode;
    userE.isLockedTransactions = userModel.isLockedTransactions;
    userE.firstName = userModel.firstName;
    userE.lastName = userModel.lastName;
    userE.email = userModel.email;
    userE.hash = userModel.hash;
    userE.photoUrl = userModel.photoUrl;
    userE.emailVerifiedAt = userModel.emailVerifiedAt;
    userE.muteSounds = userModel.muteSounds;
    userE.isLocked = userModel.isLocked;
    userE.badAttempts = userModel.badAttempts;
    userE.lastLogin = userModel.lastLogin;
    userE.deletedAt = userModel.deletedAt;
    userE.createdAt = userModel.createdAt;
    userE.updatedAt = userModel.updatedAt;
    return userE;
  }
}