import { Document } from 'mongoose';
import { ILocation } from './location.interface';
import {IProduct} from './product.interface';

export interface IPharmacy extends Document {
  id?: string;
  name: string;
  deleted: boolean;
  location: ILocation;
  products: IProduct[];
}
