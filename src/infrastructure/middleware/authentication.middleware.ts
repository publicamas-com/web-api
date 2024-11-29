import { Injectable, NestMiddleware } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const { authorization } = req.headers;
    const authorizationSlice = authorization.split(' ');
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      console.error('The Jwt secret is not present');
      throw new Error('Unexpected error');
    }
    if (authorizationSlice.length !== 2 || authorizationSlice[0] !== 'Bearer') {
      throw new Error('Invalid token');
    }
    // Check
    if (!jwt.verify(authorizationSlice[1], secretKey)) {
      throw new Error('Invalid token');
    }
    req.user = jwt.decode(authorizationSlice[1]);
    next();
  }
}