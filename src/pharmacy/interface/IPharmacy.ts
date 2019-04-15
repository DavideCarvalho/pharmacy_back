import { Document } from 'mongoose';

export interface IPharmacy extends Document {
  name: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
