import { ApiProperty } from '@nestjs/swagger';

export class Task {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  completed: number;

  @ApiProperty()
  todoId: number;

  @ApiProperty()
  userId: number;
}
