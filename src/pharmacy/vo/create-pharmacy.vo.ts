import {ApiModelProperty} from '@nestjs/swagger';
import {IsNotEmpty} from 'class-validator';
import {Type} from 'class-transformer';
import {ProductVO} from './product.vo';

export class CreatePharmacyVO {
  @ApiModelProperty()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty()
  @IsNotEmpty()
  address: string;

  @ApiModelProperty()
  @Type(() => ProductVO)
  products: ProductVO[];
}