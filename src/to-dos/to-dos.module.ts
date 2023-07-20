import { Module, forwardRef } from '@nestjs/common';
import { ToDosService } from './to-dos.service';
import { ToDosController } from './to-dos.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [forwardRef(() => UsersModule)],
  controllers: [ToDosController],
  providers: [ToDosService],
  exports: [ToDosService],
})
export class ToDosModule {}
