import { CustomHttpException } from './customHttp.exception';

export class UserExistsException extends CustomHttpException {
  statusCode: number;
  message: string;
  code?: number;
  error?: string;
  errors?: any;
  constructor(message: string) {
    super();
    this.statusCode = 409;
    this.message = `The user already exists: ${message}`;
  }
}