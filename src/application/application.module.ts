import { Module, Scope } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from '../config/env.enum';
import { UserEntity } from '../infrastructure/adapters/repository/user/entity/user.entity';
import UserFactory from './factories/users/user.factory';
import UserRepositoryPostgres from '../infrastructure/adapters/repository/user/user.repository.postgres';
import { USERS_USE_CASES } from './usecases/users';
import UserActivityRepositoryPostgres
  from '../infrastructure/adapters/repository/user/userActivity.repository.postgres';
import { UserActivityEntity } from '../infrastructure/adapters/repository/user/entity/userActivity.entity';
import NotificationService from './services/notifications/notification.service';
import EmailSenderService from './services/notifications/emailSender.service';
import CategoryRepositoryPostgres from '../infrastructure/adapters/repository/category/category.repository.postgres';
import { CATEGORIES_USE_CASES } from './usecases/categories';
import CategoryFactory from './factories/category/category.factory';
import { CategoryEntity } from '../infrastructure/adapters/repository/category/entity/category.entity';
import { AddressEntity } from '../infrastructure/adapters/repository/address/entity/address.entity';
import { RegionEntity } from '../infrastructure/adapters/repository/region/region.entity';
import { CategoryBrandEntity } from '../infrastructure/adapters/repository/category/entity/categoryBrand.entity';
import { CategoryFieldEntity } from '../infrastructure/adapters/repository/category/entity/categoryField.entity';
import { PublicationEntity } from '../infrastructure/adapters/repository/publication/entity/publication.entity';
import {
  PublicationAssetEntity,
} from '../infrastructure/adapters/repository/publication/entity/publicationAsset.entity';
import {
  PublicationFieldValuesEntity,
} from '../infrastructure/adapters/repository/publication/entity/publicationFieldValues.entity';
import { BrandEntity } from '../infrastructure/adapters/repository/brand/entity/brand.entity';
import {
  PublicationAnswerEntity,
} from '../infrastructure/adapters/repository/publication/entity/publicationAnswer.entity';
import {
  PublicationOpinionEntity
} from '../infrastructure/adapters/repository/publication/entity/publicationOpinion.entity';
import {
  PublicationQuestionEntity
} from '../infrastructure/adapters/repository/publication/entity/publicationQuestion.entity';

@Module({
  imports: [DomainModule,
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        logging: true,
        host: configService.get(Configuration.POSTGRES_HOST),
        port: configService.get(Configuration.POSTGRES_PORT),
        username: configService.get(Configuration.POSTGRES_USER),
        password: configService.get(Configuration.POSTGRES_PASSWORD),
        database: configService.get(Configuration.POSTGRES_DATABASE),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      UserActivityEntity,
      AddressEntity,
      BrandEntity,
      CategoryEntity,
      CategoryBrandEntity,
      CategoryFieldEntity,
      PublicationEntity,
      PublicationAssetEntity,
      PublicationFieldValuesEntity,
      PublicationQuestionEntity,
      PublicationOpinionEntity,
      PublicationAnswerEntity,
      RegionEntity,
    ]),
  ],
  providers: [
    UserFactory,
    CategoryFactory,
    EmailSenderService,
    NotificationService,
    { provide: 'UserRepository', useClass: UserRepositoryPostgres, scope: Scope.REQUEST },
    { provide: 'UserActivityRepository', useClass: UserActivityRepositoryPostgres, scope: Scope.REQUEST },
    { provide: 'CategoryRepository', useClass: CategoryRepositoryPostgres, scope: Scope.REQUEST },
    ...USERS_USE_CASES,
    ...CATEGORIES_USE_CASES,
  ],
  exports: [
    UserFactory,
    CategoryFactory,
    ...USERS_USE_CASES,
    ...CATEGORIES_USE_CASES,
  ],
})
export class ApplicationModule {
}