import * as mongoose from 'mongoose';

export const Role = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});
