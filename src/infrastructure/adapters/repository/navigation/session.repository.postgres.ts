import {SessionModel} from 'src/domain/model/navigation';
import {Optional} from 'typescript-optional';
import {SessionRepository} from '../../../../domain/ports/repository/navigation';
import {BaseRepositoryPostgres} from '../base.repository.postgres';
import {DataSource} from 'typeorm';
import {Inject} from '@nestjs/common';
import {REQUEST} from '@nestjs/core';
import {Request} from 'express';
import SessionMapper from "../../../mappers/navigation/session.mapper";
import {NavigationSessionEntity} from "./entity/session.entity";

export default class SessionRepositoryPostgres extends BaseRepositoryPostgres implements SessionRepository {
  constructor(dataSource: DataSource, @Inject(REQUEST) req: Request) {
    super(dataSource, req);
  }

  async createSession(model:SessionModel): Promise<Optional<SessionModel>> {
    const e=SessionMapper.fromModelToEntity(model);
    const result = await this.getRepository(NavigationSessionEntity).save(e);
    return SessionMapper.fromEntityToModel(Optional.of(result));
  }

  destroySession(): void {
    throw new Error('Method not implemented.');
  }

  async getSession(id: string): Promise<Optional<SessionModel>> {
    const result = await this.getRepository(NavigationSessionEntity).findOneBy({id});
    return SessionMapper.fromEntityToModel(Optional.of(result));
  }

  async assignSessionToUser(id:string, userId:string): Promise<void> {
    await this.getRepository(NavigationSessionEntity).update({id},{userId});
  }


}