import { UserModel } from 'src/domain/model';
import { Optional } from 'typescript-optional';
import { UserRepositoryInterface } from '../../../../domain/ports/repository/user/user.repository.interface';
import { DataSource } from 'typeorm';
import UserMapper from '../../../mappers/users/user.mapper';
import { Inject } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { BaseRepositoryPostgres } from '../base.repository.postgres';
import { UserEntity } from './entity/user.entity';

export default class UserRepositoryPostgres extends BaseRepositoryPostgres implements UserRepositoryInterface {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async findUserById(userId: string): Promise<Optional<UserModel>> {
    const userEntity = await this.getRepository(UserEntity).findOneBy({ id: userId });
    if (!userEntity) {
      return Optional.empty();
    }
    return UserMapper.fromEntityToModel(userEntity);
  }

  async findUserByEmail(email: string): Promise<Optional<UserModel>> {
    const userEntity = await this.getRepository(UserEntity).findOneBy({ email });
    if (!userEntity) {
      return Optional.empty();
    }
    return UserMapper.fromEntityToModel(userEntity);
  }

  async findUserByValidationCode(code: string): Promise<Optional<UserModel>> {
    const userEntity = await this.getRepository(UserEntity).findOneBy({ verificationCode: code });
    if (!userEntity) {
      return Optional.empty();
    }
    return UserMapper.fromEntityToModel(userEntity);
  }

  async createUser(userModel: UserModel): Promise<Optional<UserModel>> {
    const userEntity = UserMapper.fromModelToEntity(userModel);
    let result = await this.getRepository(UserEntity).save(userEntity);
    return UserMapper.fromEntityToModel(result);
  }

  async updateUser(user: UserModel): Promise<Optional<UserModel>> {
    const userEntity = UserMapper.fromModelToEntity(user);
    let result = await this.getRepository(UserEntity).save(userEntity);
    return UserMapper.fromEntityToModel(result);
  }
}