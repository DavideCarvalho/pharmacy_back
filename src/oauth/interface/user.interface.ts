import {Document} from 'mongoose';
import {IRole} from './role.interface';

export interface IUser extends Document {
  name: string;
  displayName: string;
  roles: IRole[];
}
