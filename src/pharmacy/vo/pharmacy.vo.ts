import {LocationVO} from './location.vo';
import {ProductVO} from './product.vo';
import {Type} from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class PharmacyVO {
  @IsNotEmpty()
  name: string;
  @Type(() => LocationVO)
  @IsNotEmpty()
  location: LocationVO;
  @Type(() => ProductVO)
  products: ProductVO[];

  constructor(name: string, location: LocationVO, products: ProductVO[]) {
    this.name = name;
    this.location = location;
    this.products = products;
  }
}
