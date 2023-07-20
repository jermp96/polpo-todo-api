import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsInt()
  @Min(0)
  @Max(1)
  @IsNotEmpty()
  readonly completed: boolean;

  @IsInt()
  @IsNotEmpty()
  readonly todoId: number;

  @IsInt()
  @IsNotEmpty()
  readonly userId: number;
}
