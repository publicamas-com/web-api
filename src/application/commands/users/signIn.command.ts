import { ApiProperty } from '@nestjs/swagger';

export default class SignInCommand {
  @ApiProperty({
    name: 'email',
    description: 'Email of the user',
    example: 'john@doe.com',
  })
  email: string;
  @ApiProperty({
    name: 'password',
    description: 'Password of the user',
    example: 'secret',
  })
  password: string;
}