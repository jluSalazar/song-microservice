import mongoose, { Schema, Document } from 'mongoose';

export interface ISong extends Document {
  name: string;
  path: string;
  plays: number;
}

const SongSchema: Schema = new Schema({
  name: { type: String, required: true },
  path: { type: String, required: true },
  plays: { type: Number, default: 0 }
}, {
  timestamps: true,
  collection: 'TBL_SONG'
});

export default mongoose.model<ISong>('Song', SongSchema);
