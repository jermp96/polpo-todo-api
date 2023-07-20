import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateToDoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsNotEmpty()
  keywords: string[];

  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
