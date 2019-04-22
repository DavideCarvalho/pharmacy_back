import { Document } from 'mongoose';

export interface ILocation extends Document {
  type: 'Point';
  coordinates: number[];
}
