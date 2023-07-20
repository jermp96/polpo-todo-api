import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUsersDto } from './dto/create-users.dto';
import { Users } from './entities/users.entity';

@Injectable()
export class UsersService {
  private users: Users[] = [];

  create(createUserDto: CreateUsersDto) {
    const user: Users = {
      id: this.users.length + 1,
      ...createUserDto,
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User with id '${id}' not found`);
    return user;
  }
}
