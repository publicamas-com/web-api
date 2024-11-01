import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseInterceptors } from '@nestjs/common';
import SignUpCommand from '../../../application/commands/users/signUp.command';
import SignUpResponse from '../../responses/users/signUp.response';
import SignUpUseCase from '../../../application/usecases/users/signUp.usecase';
import { TransactionInterceptor } from '../../interceptors/transaction.interceptor';
import { CustomExceptionFilter } from '../../interceptors/customException.interceptor';
import { PublicamasException } from '../../../domain/exceptions/publicamas.exception';
import { HttpStatusCodesConstants } from '../../../domain/constants/httpStatusCodes.constants';
import ValidateAccountUseCase from '../../../application/usecases/users/validateAccount.usecase';
import { SignInResponse } from '../../../application/responses/user/signIn.response';
import SignInUseCase from '../../../application/usecases/users/signIn.usecase';


@Controller('/api/v1/users')
export default class UserController {

  constructor(
    private readonly signUpUseCase: SignUpUseCase,
    private readonly validateAccountUseCase: ValidateAccountUseCase,
    private readonly signInUseCase: SignInUseCase,
  ) {
  }

  @Post('/sign-up')
  @UseInterceptors(TransactionInterceptor, CustomExceptionFilter)
  @HttpCode(HttpStatus.CREATED)
  public async createApplication(
    @Body() signUpCommand: SignUpCommand,
  ): Promise<SignUpResponse> {
    let result = (await this.signUpUseCase.handler(signUpCommand))
      .orElseThrow(() => new PublicamasException('User not created', HttpStatusCodesConstants.INTERNAL_SERVER_ERROR));
    let response = new SignUpResponse();
    response.id = result.id;
    response.email = result.email;
    response.name = result.firstName + ' ' + result.lastName;
    response.createdAt = result.createdAt;
    response.updatedAt = result.updatedAt;
    return response;
  }

  @Post('/validate/:code')
  @UseInterceptors(TransactionInterceptor, CustomExceptionFilter)
  @HttpCode(HttpStatus.NO_CONTENT)
  public async validateAccount(
    @Req() req,
  ): Promise<void> {
    (await this.validateAccountUseCase.handler(req.params.code))
      .orElseThrow(() => new PublicamasException('Error validating user account', HttpStatusCodesConstants.BAD_REQUEST));
    return;
  }

  @Post('/sign-in')
  @UseInterceptors(TransactionInterceptor, CustomExceptionFilter)
  @HttpCode(HttpStatus.OK)
  public async signIn(
    @Body() signInCommand: SignUpCommand,
  ): Promise<SignInResponse> {
    return await this.signInUseCase.handler(signInCommand);
  }
}