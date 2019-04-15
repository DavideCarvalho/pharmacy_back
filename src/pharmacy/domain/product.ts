import { Schema } from 'mongoose';

export const PharmacySchema = new Schema({
  name: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
});
