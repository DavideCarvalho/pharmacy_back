import { Expose, Transform } from 'class-transformer';

export class ProductDTO {
  @Expose({ name: '_id' })
  @Transform((objectId) => objectId.toString(), { toClassOnly: true })
  id: string;
  name: string;
  value: number;
  descount: number;
  deleted: boolean = false;
}
