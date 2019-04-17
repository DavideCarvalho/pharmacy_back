import * as mongoose from 'mongoose';
import { Location } from './location';
import { Product } from './products';

export const Pharmacy = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deleted: {
    type: Boolean,
    required: true,
  },
  location: Location,
  products: [Product],
});
