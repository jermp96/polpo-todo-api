import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { ToDosService } from './to-dos.service';
import { CreateToDoDto } from './dto/create-to-do.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { ToDo, TodosByUser } from './entities/to-do.entity';
import { Task } from './entities/task.entity';

@ApiTags('ToDos')
@Controller('todos')
export class ToDosController {
  constructor(private readonly toDosService: ToDosService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Todo was created', type: ToDo })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  create(@Body() createToDoDto: CreateToDoDto) {
    return this.toDosService.create(createToDoDto);
  }

  @Post(':id/task')
  @ApiResponse({ status: 201, description: 'Todo was created', type: Task })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  createTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    return this.toDosService.createTask(id, createTaskDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'All todos listed',
    type: [ToDo],
  })
  findAll() {
    return this.toDosService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({
    status: 200,
    description: 'All todos listed',
    type: TodosByUser,
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.toDosService.findOneWithTasks(+id);
  }
}
