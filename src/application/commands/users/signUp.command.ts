import { ApiProperty } from '@nestjs/swagger';

export default class SignUpCommand {
  @ApiProperty({
    name: 'firstName',
    description: 'First name of the user',
    example: 'John',
  })
  firstName: string;
  @ApiProperty({
    name: 'lastName',
    description: 'last name of the user',
    example: 'Doe',
  })
  lastName: string;
  @ApiProperty({
    name: 'email',
    description: 'Email of the user',
    example: 'hola@publicamas.com.ar',
  })
  email: string;
  @ApiProperty({
    name: 'password',
    description: 'Password of the user',
    example: '123456',
  })
  password: string;

  @ApiProperty({
    name: 'repeatPassword',
    description: 'repeat password of the user',
    example: '123456',
  })
  repeatPassword: string;
}
