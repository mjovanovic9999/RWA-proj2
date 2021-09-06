import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    NotesModule,
    UsersModule,
    MongooseModule.forRoot(
      //`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`
      'mongodb://localhost:27017/mynotes',
    ),
  ], //da de u environments
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
