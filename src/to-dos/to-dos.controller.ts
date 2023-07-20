import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ToDosService } from './to-dos.service';
import { CreateToDoDto } from './dto/create-to-do.dto';

@Controller('todos')
export class ToDosController {
  constructor(private readonly toDosService: ToDosService) {}

  @Post()
  create(@Body() createToDoDto: CreateToDoDto) {
    return this.toDosService.create(createToDoDto);
  }

  @Get()
  findAll() {
    return this.toDosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.toDosService.findOne(+id);
  }
}
