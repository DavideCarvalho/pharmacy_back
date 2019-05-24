import {LocationVO} from './location.vo';
import {ProductVO} from './product.vo';
import {Type} from 'class-transformer';
import {IsNotEmpty} from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class PharmacyVO {

  id: string;

  @ApiModelProperty()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty()
  @Type(() => LocationVO)
  @IsNotEmpty()
  location: LocationVO;

  @ApiModelProperty()
  @Type(() => ProductVO)
  products: ProductVO[];
}
