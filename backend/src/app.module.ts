import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from './environments/environment';

import { NotesModule } from './notes/notes.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    NotesModule,
    UsersModule,
    MongooseModule.forRoot(
      environment.dbURL,
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
