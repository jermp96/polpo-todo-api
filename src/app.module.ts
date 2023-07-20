import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { ToDosModule } from './to-dos/to-dos.module';
import { SeedModule } from './seed/seeed.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    UsersModule,
    ToDosModule,
    SeedModule,
  ],
})
export class AppModule {}
