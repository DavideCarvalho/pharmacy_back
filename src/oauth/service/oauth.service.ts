import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserDTO} from '../dto';
import {OauthRepository} from '../repository';
import {deserialize} from 'class-transformer';
import {IUser} from '../interface';

@Injectable()
export class OauthService {

  constructor(
    private readonly repository: OauthRepository,
  ) {

  }

  async getUser(): Promise<UserDTO> {
    const user: IUser = await this.repository.findByEmailAndPassword();
    if (!user) {
      throw new HttpException({
        error: 'User not found',
        status: HttpStatus.NOT_FOUND,
      }, HttpStatus.NOT_FOUND);
    }
    return deserialize<UserDTO>(UserDTO, JSON.stringify(user.toString()));
  }
}
