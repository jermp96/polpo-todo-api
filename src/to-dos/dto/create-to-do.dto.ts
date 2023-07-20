import { IsArray, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateToDoDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsArray()
  @IsNotEmpty()
  readonly keywords: string[];

  @IsInt()
  @IsNotEmpty()
  readonly userId: number;
}
