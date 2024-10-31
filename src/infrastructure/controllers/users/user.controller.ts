import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseInterceptors } from '@nestjs/common';
import SignUpCommand from '../../../application/commands/users/signUp.command';
import SignUpResponse from '../../responses/users/signUp.response';
import SignUpUseCase from '../../../application/usecases/users/signUp.usecase';
import { TransactionInterceptor } from '../../interceptors/transaction.interceptor';
import { CustomExceptionFilter } from '../../interceptors/customException.interceptor';



@Controller('/api/v1/users')
export default class UserController {

  constructor(
    private readonly signUpUseCase: SignUpUseCase,
  ) {
  }

  @Post('/sign-up')
  @UseInterceptors(TransactionInterceptor, CustomExceptionFilter)
  @HttpCode(HttpStatus.CREATED)
  public async createApplication(
    @Body() signUpCommand: SignUpCommand,
  ): Promise<SignUpResponse> {
    //TODO check the way to return a custom exception
    let result = (await this.signUpUseCase.handler(signUpCommand)).orElseThrow(() => new Error('User not created'));
    let response = new SignUpResponse();
    response.id = result.id;
    response.email = result.email;
    response.name = result.firstName + ' ' + result.lastName;
    response.createdAt = result.createdAt;
    response.updatedAt = result.updatedAt;
    return response;
  }

}