import { Document, Schema } from 'mongoose';

export const NoteSchema = new Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
});

export interface Note extends Document{
  note_id: string;
  username: string;
  title: string;
  content: string;
}
