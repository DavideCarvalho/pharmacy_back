import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {IUser} from '../interface';
import {Model} from 'mongoose';

@Injectable()
export class OauthRepository {

  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
  ) {
  }

  async findByEmailAndPassword(): Promise<IUser> {
    return await this.userModel.findOne({ email: 'email', password: 123 });
  }
}
