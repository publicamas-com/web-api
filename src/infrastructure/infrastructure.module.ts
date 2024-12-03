import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import UserController from './controllers/users/user.controller';
import { ApplicationModule } from '../application/application.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { CategoryController } from './controllers/category/category.controller';
import {SessionNavigationController} from "./controllers/navigation/sessionNavigation.controller";

@Module({
  imports: [ApplicationModule,
    PassportModule,
    ConfigModule],
  providers: [],
  controllers: [UserController, CategoryController, SessionNavigationController],
  exports: [],
})
export class InfrastructureModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.GET, path: '/api/v1/users/me' },
      { method: RequestMethod.POST, path: '/api/v1/session-navigation/:id/users' },
    );
  }
}