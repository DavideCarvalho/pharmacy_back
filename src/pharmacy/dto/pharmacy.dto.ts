import { LocationDTO } from './location.dto';
import {ProductDTO} from './product.dto';
import {Expose, Type} from 'class-transformer';

export class PharmacyDTO {

  private name: string;
  @Type(() => LocationDTO)
  private location: LocationDTO;
  @Type(() => ProductDTO)
  private products: ProductDTO[];
  private deleted: boolean = false;

  constructor(name: string, location: LocationDTO, products: ProductDTO[], deleted: boolean = false) {
    this.name = name;
    this.location = location;
    this.products = products;
    this.deleted = deleted;
  }
}
