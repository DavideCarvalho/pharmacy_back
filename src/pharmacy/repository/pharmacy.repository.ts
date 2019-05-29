import {InjectModel} from '@nestjs/mongoose';
import {Injectable} from '@nestjs/common';
import {PaginateModel, PaginateResult, Types} from 'mongoose';
import {IPharmacy} from '../interface';
import {PharmacyDTO, ProductDTO, SearchDTO} from '../dto';
import {LocationModel} from '../model';

@Injectable()
export class PharmacyRepository {

  constructor(
    @InjectModel('Pharmacy') private readonly pharmacyModel: PaginateModel<IPharmacy>,
  ) {
  }

  async save(dto: PharmacyDTO): Promise<IPharmacy> {
    return await new this.pharmacyModel(dto).save();
  }

  async find(limit: number, offset: number): Promise<PaginateResult<IPharmacy>> {
    return await this.pharmacyModel.paginate(null, {limit, offset});
  }

  async findById(id: string): Promise<IPharmacy> {
    return await this.pharmacyModel.findById(id);
  }

  async findByGeolocation(product: string, coordinates: number[], limit: number, offset: number): Promise<PaginateResult<IPharmacy>> {
    let query: any = {
      location: {
        $nearSphere: {
          $geometry: {
            type: 'Point',
            coordinates,
          },
        },
      },
      'products.name': new RegExp(product, 'i'),
    };
    return await this.pharmacyModel.paginate(query, {limit, offset});
  }

  async overwriteProducts(id: string, products: ProductDTO[]): Promise<void> {
    this.pharmacyModel.findByIdAndUpdate(id, {
      $set: {
        products,
      },
    });
  }

  async addNewProduct(id: string, product: ProductDTO): Promise<void> {
    this.pharmacyModel.findByIdAndUpdate(id, {
      $push: {
        products: product,
      },
    });
  }

  async updateProduct(id: string, productId: string, product: ProductDTO): Promise<void> {
    this.pharmacyModel.findOneAndUpdate(
      {
        '_id': new Types.ObjectId(id),
        'product._id': new Types.ObjectId(productId),
      },
      {
        $set: {
          'products.$': product,
        },
      },
    );
  }
}
