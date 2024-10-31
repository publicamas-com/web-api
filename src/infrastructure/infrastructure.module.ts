import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import UserController from './controllers/users/user.controller';
import { ApplicationModule } from '../application/application.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';

@Module({
  imports: [ApplicationModule,
    PassportModule,
    ConfigModule],
  providers: [],
  controllers: [UserController],
  exports: [],
})
export class InfrastructureModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/api/v1/users/me' },
    );
  }
}