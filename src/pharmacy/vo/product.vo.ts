import {IsInt, IsNotEmpty, IsString} from 'class-validator';
import {ApiModelProperty} from '@nestjs/swagger';

export class ProductVO {
  @IsString()
  @IsNotEmpty()
  id: string;

  @ApiModelProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiModelProperty()
  @IsInt()
  @IsNotEmpty()
  value: number;

  @ApiModelProperty()
  @IsInt()
  @IsNotEmpty()
  descount: number;

  @IsInt()
  @IsNotEmpty()
  deleted: false;
}
