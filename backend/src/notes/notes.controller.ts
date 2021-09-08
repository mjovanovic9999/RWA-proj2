import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from 'src/notes/auth.guard';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(AuthGuard)
  @Post('new')
  async addNote(
    @Req() request: Request,
    @Body('title') noteTitle: string,
    @Body('content') noteContent: string,
  ) {
    return await this.notesService.addNewNote(request, noteTitle, noteContent);
  }

  @UseGuards(AuthGuard)
  @Get()
  async getAllNotes(@Req() request: Request) {
    const notes = await this.notesService.getAllUserNotes(request);
    return notes;
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  async getSingleNoteById(
    @Req() request: Request,
    @Param('id') noteId: string,
  ) {
    return await this.notesService.getSingleNoteById(request, noteId);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  async updateNote(
    @Req() request: Request,
    @Param('id') noteId: string,
    @Body('title') title: string,
    @Body('content') content: string,
  ) {
    return await this.notesService.updateNote(request, noteId, title, content);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async deleteNote(@Req() request: Request, @Param('id') noteId: string) {
    await this.notesService.deleteNote(request, noteId);
    return noteId;
  }
}
