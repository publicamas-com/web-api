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
    ]),
  ],
  providers: [
    UserFactory,
    EmailSenderService,
    NotificationService,
    { provide: 'UserRepository', useClass: UserRepositoryPostgres, scope: Scope.REQUEST },
    { provide: 'UserActivityRepository', useClass: UserActivityRepositoryPostgres, scope: Scope.REQUEST },
    ...USERS_USE_CASES,
  ],
  exports: [
    UserFactory,
    ...USERS_USE_CASES,
  ],
})
export class ApplicationModule {
}