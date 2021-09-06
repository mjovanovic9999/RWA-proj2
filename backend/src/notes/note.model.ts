import { Schema } from 'mongoose';

export const NoteSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
  },
  { collection: 'main' },
);

export interface Note {
  note_id: string;
  title: string;
  content: string;
}
