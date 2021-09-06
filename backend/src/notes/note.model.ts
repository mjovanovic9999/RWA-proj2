import { Schema } from 'mongoose';

export const NoteSchema = new Schema({
  note_id: { type: String, required: true },
  username: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export interface Note {
  note_id: string;
  username: string;
  title: string;
  content: string;
}
