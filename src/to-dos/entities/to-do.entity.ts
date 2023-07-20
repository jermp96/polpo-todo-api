import { ApiProperty } from '@nestjs/swagger';
import { Task } from './task.entity';

export class ToDo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  keywords: string[];

  @ApiProperty()
  userId: number;
}

export class TodosByUser extends ToDo {
  @ApiProperty()
  todos: Array<Task>;
}
