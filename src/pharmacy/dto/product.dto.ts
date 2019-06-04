import {Expose} from 'class-transformer';

export class ProductDTO {
  @Expose({name: '_id'})
  id: string;
  name: string;
  value: number;
  descount: number;
  deleted: boolean = false;
}
