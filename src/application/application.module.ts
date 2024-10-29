import { Module } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Configuration } from '../config/env.enum';
import { UserEntity } from '../infrastructure/adapters/repository/user/entity/user.entity';

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
      UserEntity
    ])
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class ApplicationModule {
}