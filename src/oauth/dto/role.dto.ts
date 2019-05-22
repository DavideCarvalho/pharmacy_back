import {Type} from 'class-transformer';
import {LocationDTO, ProductDTO} from '../../pharmacy/dto';

export class RoleDTO {
  id: string;
  name: string;
  @Type(() => LocationDTO)
  displayName: LocationDTO;
  @Type(() => ProductDTO)
  type: string;
}
