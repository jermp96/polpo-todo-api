import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateToDoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  readonly keywords: string[];

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: number;
}
