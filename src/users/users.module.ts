import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ToDosModule } from 'src/to-dos/to-dos.module';

@Module({
  imports: [forwardRef(() => ToDosModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
