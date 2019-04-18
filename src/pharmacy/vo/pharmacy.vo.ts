import {LocationVO} from './location.vo';
import {ProductVO} from './product.vo';
import {Type} from 'class-transformer';

export class PharmacyVO {
  name: string;
  @Type(() => LocationVO)
  location: LocationVO;
  @Type(() => ProductVO)
  products: ProductVO[];

  constructor(name: string, location: LocationVO, products: ProductVO[]) {
    this.name = name;
    this.location = location;
    this.products = products;
  }
}
