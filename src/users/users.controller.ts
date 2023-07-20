import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
import { ToDosService } from 'src/to-dos/to-dos.service';
import { Users } from './entities/users.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private readonly toDosService: ToDosService,
  ) {}

  @Post()
  @ApiResponse({ status: 201, description: 'User was created', type: Users })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createUserDto: CreateUsersDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'All users listed' })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User found', type: Users })
  @ApiResponse({ status: 404, description: 'Not found' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(+id);
  }

  @Get(':id/todos')
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 200, description: 'Todos found' })
  findTodoByUserId(@Param('id', ParseIntPipe) id: number) {
    return this.toDosService.findByUserId(id);
  }
}
