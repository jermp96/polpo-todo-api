import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly title: string;

  @IsInt()
  @Min(0)
  @Max(1)
  @IsNotEmpty()
  @ApiProperty()
  readonly completed: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly todoId: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  readonly userId: number;
}
