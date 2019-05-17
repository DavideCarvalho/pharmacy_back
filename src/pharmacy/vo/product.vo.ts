import {IsInt, IsNotEmpty, IsString} from 'class-validator';

export class ProductVO {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsInt()
  @IsNotEmpty()
  value: number;
  @IsInt()
  @IsNotEmpty()
  descount: number;
  @IsInt()
  @IsNotEmpty()
  deleted: false;
}
