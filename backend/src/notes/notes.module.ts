import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthGuard } from 'src/notes/auth.guard';
import { NoteSchema } from './note.model';

import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Note', schema: NoteSchema }]),
    JwtModule.register({
      secret: 'SeCrEt',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [NotesController],
  providers: [NotesService, AuthGuard],
})
export class NotesModule {}
