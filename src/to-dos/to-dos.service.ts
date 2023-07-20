import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { ToDo } from './entities/to-do.entity';
import { UsersService } from 'src/users/users.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class ToDosService {
  private ToDos: ToDo[] = [];
  private tasks: Task[] = [];

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

  createTask(todoId: number, createTaskDto: CreateTaskDto) {
    let task: Task;
    const todo = this.findOne(todoId);

    if (todo) {
      task = {
        id: this.tasks.length + 1,
        ...createTaskDto,
      };
      this.tasks.push(task);
    }

    return task;
  }

  findAll() {
    return this.ToDos;
  }

  findOne(id: number) {
    const todo = this.ToDos.find((todo) => todo.id === id);
    if (!todo) throw new NotFoundException(`ToDo with id '${id}' not found`);

    return todo;
  }

  findOneWithTasks(id: number) {
    const todo = this.findOne(id);
    const tasks = this.tasks.filter((task) => task.todoId === todo.id);
    if (!tasks)
      throw new NotFoundException(
        `There are not tasks for the todo id '${todo.id}'`,
      );

    const todos = {
      ...todo,
      todos: [...tasks],
    };

    return todos;
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
