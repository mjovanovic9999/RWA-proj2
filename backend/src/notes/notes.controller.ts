import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async addNote(
    @Body('title') noteTitle: string,
    @Body('content') noteContent: string,
  ) {
    const generatedId = await this.notesService.createNote(
      noteTitle,
      noteContent,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllNotes(@Param('username') username: string) {
    const notes = await this.notesService.getUserNotes(username); //username
    return notes;
  }
  // backap od iznad @Get()
  // getAllNotes() {
  //   return this.notesService.getUserNotes("Tom");//username
  // }

  @Get(':id')
  getNote(@Param('id') noteId: string) {
    return this.notesService.getSingleNote(noteId);
  }

  @Patch(':id')
  updateNote(
    @Param('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
  ) {
    this.notesService.updateNote(prodId, prodTitle, prodDesc);
    return null;
  }

  @Delete(':id')
  removeNote(@Param('id') prodId: string) {
    this.notesService.deleteNote(prodId);
    return null;
  }
}
