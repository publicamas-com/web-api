import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import UserController from './controllers/users/user.controller';
import {ApplicationModule} from '../application/application.module';
import {PassportModule} from '@nestjs/passport';
import {ConfigModule} from '@nestjs/config';
import {AuthenticationMiddleware} from './middleware/authentication.middleware';
import {CategoryController} from './controllers/category/category.controller';
import {SessionNavigationController} from "./controllers/navigation/sessionNavigation.controller";
import PublicationController from "./controllers/publication/publication.controller";
import {SessionNavigationMiddleware} from "./middleware/sessionNavigation.middleware";

@Module({
    imports: [ApplicationModule,
        PassportModule,
        ConfigModule],
    providers: [],
    controllers: [UserController, CategoryController, PublicationController, SessionNavigationController],
    exports: [],
})
export class InfrastructureModule {
    configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer.apply(SessionNavigationMiddleware).forRoutes(
            {method: RequestMethod.GET, path: '/api/v1/publications/:id'},
            {method: RequestMethod.GET, path: '/api/v1/publications/:id/seller'},
            {method: RequestMethod.GET, path: '/api/v1/categories/:id'},
            {method: RequestMethod.GET, path: '/api/v1/brands/:id'},
        );
        consumer.apply(AuthenticationMiddleware).forRoutes(
            {method: RequestMethod.GET, path: '/api/v1/users/me'},
            {method: RequestMethod.POST, path: '/api/v1/session-navigation/:id/users'},
        );
    }
}