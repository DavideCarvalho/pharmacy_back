import {LocationDTO} from './location.dto';
import {ProductDTO} from './product.dto';
import {Expose, Transform, Type} from 'class-transformer';

export class PharmacyDTO {
  @Expose({name: '_id'})
  @Transform((objectId) => objectId.toString(), {toClassOnly: true})
  id: string;
  name: string;
  @Type(() => LocationDTO)
  location: LocationDTO;
  @Type(() => ProductDTO)
  products: ProductDTO[];
  deleted: boolean = false;
}
