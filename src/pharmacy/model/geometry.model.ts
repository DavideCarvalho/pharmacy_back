import {BoundsModel} from './bounds.model';
import {LocationModel} from './location.model';

export class GeometryModel {
  bounds: BoundsModel;
  location: LocationModel;
  location_type: string;
  viewport: BoundsModel;
}