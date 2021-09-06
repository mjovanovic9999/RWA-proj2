import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Note } from './note.model';

@Injectable()
export class NotesService {
  private notes: Note[] = [];

  constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

  async createNote(title: string, content: string) {
    const newNote = new this.noteModel({ title: title, content: content });
    this.notes.push(newNote);
    const result = await newNote.save();
    return result.id as string;
  }

  async getUserNotes(title: string) {
    //moze i svaki obj da se mapira
    const result = await this.noteModel.find({ username: title }).exec();
    console.log(result);
    console.log(title);
    return result.map((note) => note);
  }
  //backup od gore  async getUserNotes(username: string) {
  //   moze i svaki obj da se mapira
  //   const result = await this.noteModel.find();
  //   console.log(result);
  //   return [...result];
  // }
  async getSingleNote(noteId: string) {
    const note = await this.findNote(noteId);
    console.log(note);

    return note;
  }

  updateNote(noteId: string, title: string, content: string) {
    const note = this.findNote(noteId);
    const updatedNote = { ...note };
    // if (title) {
    //   updatedNote.title = title;
    // }
    // if (content) {
    //   updatedNote.content = content;
    // }
    // this.notes[index] = updatedNote;
  }

  deleteNote(noteId: string) {
    const index = this.findNote(noteId)[1];
    this.notes.splice(index, 1);
  }

  private async findNote(id: string): Promise<Note> {
    const note = await this.noteModel.findById(id);
    console.log('note');
    console.log(note);
    if (!note) {
      throw new NotFoundException('Could not find note.');
    }
    return {
      note_id:note.note_id,
      username: note.username,
      title: note.title,
      content: note.content,
    };
  }
}
