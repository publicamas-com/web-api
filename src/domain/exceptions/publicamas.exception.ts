import { CustomHttpException } from './customHttp.exception';

export class PublicamasException extends CustomHttpException {
  constructor(message: string, statusCode:number) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}