import {Injectable, NestMiddleware} from "@nestjs/common";

@Injectable()
export class SessionNavigationMiddleware implements NestMiddleware {
    use(req: any, res: any, next: (error?: Error | any) => void) {
        const {"x-session-navigation": header} = req.headers;
        if (!header) {
            return next();
        }
        req.sessionNavigationId = header;
        next();
    }

}