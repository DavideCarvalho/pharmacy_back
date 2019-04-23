import {InjectModel} from '@nestjs/mongoose';
import {Injectable} from '@nestjs/common';
import {PaginateModel, PaginateResult, Types} from 'mongoose';
import {IPharmacy} from '../interface';
import {PharmacyDTO, SearchDTO} from '../dto';

@Injectable()
export class PharmacyRepository {

  constructor(
    @InjectModel('Pharmacy') private readonly pharmacyModel: PaginateModel<IPharmacy>,
  ) {
  }

  async save(dto: PharmacyDTO): Promise<IPharmacy> {
    return await new this.pharmacyModel(dto).save();
  }

  async find(): Promise<IPharmacy[]> {
    return await this.pharmacyModel.find().lean({ virtuals: true } as any);
  }

  async findById(id: string): Promise<IPharmacy> {
    return await this.pharmacyModel.findById(id);
  }

  async findByGeolocation({ coordinates, product }: SearchDTO): Promise<PaginateResult<IPharmacy>> {
    let query: any = {
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates,
          },
        },
      },
    };
    if (product) { query = {...query, 'products.name': new RegExp(product, 'i') }; }
    return await this.pharmacyModel.paginate(query);
  }
}
