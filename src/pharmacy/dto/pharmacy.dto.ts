import {LocationDTO} from './location.dto';
import {ProductDTO} from './product.dto';
import {Expose, Type} from 'class-transformer';

export class PharmacyDTO {
  @Expose({name: '_id'})
  id: string;
  name: string;
  @Type(() => LocationDTO)
  location: LocationDTO;
  address: string;
  @Type(() => ProductDTO)
  products: ProductDTO[];
  deleted: boolean = false;
}
