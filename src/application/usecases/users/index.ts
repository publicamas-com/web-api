import SignUpUseCase from './signUp.usecase';
import ValidateAccountUseCase from './validateAccount.usecase';
import SignInUseCase from './signIn.usecase';
import GetUserUseCase from './getUser.usecase';

export const USERS_USE_CASES = [SignUpUseCase, GetUserUseCase, ValidateAccountUseCase, SignInUseCase];