import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPharmacyDto, IPharmacy } from '../interface';
import { PharmacyVO } from '../vo';

@Injectable()
export class PharmacyService {

  constructor(
    @InjectModel('pharmacy') private readonly pharmacyModel: Model<IPharmacy>,
  ) {}

  async create(createPharmacyDTO: PharmacyVO): Promise<PharmacyVO> {
    const createdPharmacy = new this.pharmacyModel(createPharmacyDTO);
    await createdPharmacy.save();
    return new PharmacyVO(null, null);
  }
}
