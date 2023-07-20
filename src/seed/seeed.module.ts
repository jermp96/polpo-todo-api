import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { UsersModule } from 'src/users/users.module';
import { ToDosModule } from 'src/to-dos/to-dos.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [UsersModule, ToDosModule],
})
export class SeedModule {}
