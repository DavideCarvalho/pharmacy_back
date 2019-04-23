import * as mongoose from 'mongoose';
import * as mongooseLeanVirtuals from 'mongoose-lean-virtuals';
import * as mongoosePaginate from 'mongoose-paginate';
import { Location } from './location';
import { Product } from './product';

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

Pharmacy.plugin(mongoosePaginate);
Pharmacy.plugin(mongooseLeanVirtuals);
Pharmacy.index({ location: '2dsphere', name: 'text' });
