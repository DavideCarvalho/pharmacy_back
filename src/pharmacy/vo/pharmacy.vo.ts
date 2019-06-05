import {LocationVO} from './location.vo';
import {ProductVO} from './product.vo';
import {Type} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class PharmacyVO {
  id: string;
  @ApiModelProperty()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty()
  @Type(() => LocationVO)
  @IsNotEmpty()
  location: LocationVO;

  @IsNotEmpty()
  address: string;

  @ApiModelProperty()
  @Type(() => ProductVO)
  products: ProductVO[];
}
