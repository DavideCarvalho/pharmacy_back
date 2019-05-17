import {Document} from 'mongoose';

export interface IProduct extends Document {
  name: string;
  value: number;
  descount: number;
  deleted: boolean;
}
