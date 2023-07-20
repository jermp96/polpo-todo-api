import { Injectable } from '@nestjs/common';
import { ToDosService } from 'src/to-dos/to-dos.service';
import { UsersService } from 'src/users/users.service';
import { USERS } from './data/users.seed';
import { TASKS, TODOS } from './data/to-do.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly userService: UsersService,
    private readonly todoService: ToDosService,
  ) {}

  populateDB() {
    this.userService.fillUsersWithSeedData(USERS);
    this.todoService.fillTodosWithSeedData(TODOS);
    this.todoService.fillTaskWithSeedData(TASKS);
    return 'Seed executed';
  }
}
