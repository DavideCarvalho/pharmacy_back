import {IPharmacy} from '../interface';
import {InjectModel} from '@nestjs/mongoose';
import {Injectable} from '@nestjs/common';
import {PharmacyDTO} from '../dto';
import {Model} from 'mongoose';

@Injectable()
export class PharmacyRepository {

  constructor(
    @InjectModel('Pharmacy') private readonly pharmacyModel: Model<IPharmacy>,
  ) {
  }

  async save(dto: PharmacyDTO): Promise<IPharmacy> {
    return await new this.pharmacyModel(dto).save();
  }

  async find(): Promise<IPharmacy[]> {
    return await this.pharmacyModel.find();
  }
}
