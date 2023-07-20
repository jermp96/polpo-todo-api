import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { ToDo } from './entities/to-do.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ToDosService {
  private ToDos: ToDo[] = [];

  constructor(private readonly userService: UsersService) {}

  create(createToDoDto: CreateToDoDto) {
    const user = this.userService.findOne(createToDoDto.userId);
    let todo: ToDo;
    if (user) {
      todo = {
        id: this.ToDos.length + 1,
        ...createToDoDto,
      };

      this.ToDos.push(todo);
    }
    return todo;
  }

  findAll() {
    return this.ToDos;
  }

  findOne(id: number) {
    const todo = this.ToDos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException(`ToDo with id '${id}' not found`);
    return todo;
  }

  findByUserId(userId: number) {
    const user = this.userService.findOne(userId);
    const todos = this.ToDos.filter((todo) => todo.userId === user.id);
    if (!todos)
      throw new NotFoundException(
        `There not ToDos for the user with id '${user.id}'`,
      );
    return todos;
  }
}
