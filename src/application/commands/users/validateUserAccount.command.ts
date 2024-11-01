import { ApiProperty } from '@nestjs/swagger';

export default class ValidateUserAccountCommand {
  @ApiProperty({
    name: 'code',
    description: 'Code to validate user',
    example: '1234',
  })
  code:string
}