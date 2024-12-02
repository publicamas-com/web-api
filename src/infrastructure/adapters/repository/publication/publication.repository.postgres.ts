import { Injectable } from '@nestjs/common';
import { BaseRepositoryPostgres } from '../base.repository.postgres';
import { PublicationRepository } from '../../../../domain/ports/repository/publication';

@Injectable()
export default class PublicationRepositoryPostgres extends BaseRepositoryPostgres implements PublicationRepository{

}