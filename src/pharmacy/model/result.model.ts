import {AddressComponentModel} from './address-component.model';
import {GeometryModel} from './geometry.model';

export class ResultModel {
  address_components: AddressComponentModel[];
  formatted_address: string;
  geometry: GeometryModel;
  place_id: string;
  types: string[];
}