import * as mongoose from 'mongoose';

export const Pharmacy = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
