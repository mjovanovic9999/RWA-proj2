import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Request } from 'express';
import { Note } from './note.model';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class NotesService {
  constructor(
    @InjectModel('Note') private readonly noteModel: Model<Note>,
    private jwtService: JwtService,
  ) {}

  async createNote(request: Request, title: string, content: string) {
    const newNote = new this.noteModel({
      username: await this.getUsernameFromCookie(request),
      title: title,
      content: content,
    });
    const result = await newNote.save();
    return result.id;
  }

  async getAllUserNotes(request: Request): Promise<Note[]> {
    const result = await this.noteModel
      .find({ username: await this.getUsernameFromCookie(request) })
      .exec();
    return result.map((res) => this.MapToNote(res));
  }

  async getSingleNoteById(request: Request, noteId: string) {
    const note = await this.MapToNote(await this.findNote(request, noteId));
    console.log(note);
    return note;
  }

  async updateNote(
    request: Request,
    noteId: string,
    title: string,
    content: string,
  ) {
    const newNote = await this.findNote(request, noteId);

    if (title) newNote.title = title;

    if (content) newNote.content = content;

    newNote.save();
    return newNote;
  }

  async deleteNote(request: Request, noteId: string) {
    const noteForDelete = await this.findNote(request, noteId);
    await noteForDelete.deleteOne();
  }

  private async findNote(request: Request, note_id: string): Promise<Note> {
    let note;
    try {
      note = await this.noteModel.findById(note_id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find note.');
    }

    if (!note || (await this.getUsernameFromCookie(request)) !== note.username)
      throw new NotFoundException('Could not find note.');

    return note;
  }

  private async getUsernameFromCookie(request: Request): Promise<string> {
    const cookie = request.cookies['jwt'];
    const data = await this.jwtService.verifyAsync(cookie);
    return data['username'];
  }

  private MapToNote(oldNote: Note): any {
    return {
      note_id: oldNote.id,
      username: oldNote.username,
      title: oldNote.title,
      content: oldNote.content,
    };
  }
}
