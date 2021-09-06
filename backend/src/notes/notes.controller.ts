import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
import { Response, Request } from 'express';
import { AuthGuard } from 'src/notes/auth.guard';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(
    private readonly notesService: NotesService,
    // private jwtService: JwtService,
  ) {}

  @UseGuards(AuthGuard)
  @Post("new")
  async addNote(
    @Body('title') noteTitle: string,
    @Body('content') noteContent: string,
    //@Req() request: Request,
  ) {
    // const cookie = request.cookies['jwt'];
    // const data = await this.jwtService.verifyAsync(cookie);
    // if (!data) throw new UnauthorizedException();

    // return data['username'];

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
