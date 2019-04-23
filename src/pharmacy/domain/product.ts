import * as mongoose from 'mongoose';

export const Product = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  descount: {
    type: Number,
    required: false,
  },
  deleted: {
    type: Boolean,
    required: true,
  },
});
