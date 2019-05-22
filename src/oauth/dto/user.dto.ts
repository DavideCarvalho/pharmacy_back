import {Type} from 'class-transformer';
import {LocationDTO, ProductDTO} from '../../pharmacy/dto';
import {RoleDTO} from './role.dto';

export class UserDTO {
  id: string;
  name: string;
  @Type(() => LocationDTO)
  displayName: LocationDTO;
  @Type(() => ProductDTO)
  roles: RoleDTO[];
}
