import {LocationVO} from './location.vo';
import {ProductVO} from './product.vo';
import {Type} from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class PharmacyVO {
  id: string;
  @IsNotEmpty()
  name: string;
  @Type(() => LocationVO)
  @IsNotEmpty()
  location: LocationVO;
  @Type(() => ProductVO)
  products: ProductVO[];
}
