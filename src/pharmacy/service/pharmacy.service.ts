import {Injectable} from '@nestjs/common';
import {deserializeArray, plainToClass} from 'class-transformer';
import {IPharmacy} from '../interface';
import {PharmacyDTO, ProductDTO, SearchDTO} from '../dto';
import {PharmacyRepository} from '../repository';
import {PaginateResult} from 'mongoose';

@Injectable()
export class PharmacyService {

  constructor(
    private readonly repository: PharmacyRepository,
  ) {
  }

  async create(pharmacy: PharmacyDTO): Promise<PharmacyDTO> {
    const savedPharmacy: IPharmacy = await this.repository.save(pharmacy);
    return plainToClass<PharmacyDTO, IPharmacy>(PharmacyDTO, savedPharmacy.toJSON({virtuals: true}), {excludePrefixes: ['_']});
  }

  async find(limit: number, offset: number): Promise<PaginateResult<PharmacyDTO>> {
    const allPharmacies: PaginateResult<IPharmacy> = await this.repository.find(limit, offset);
    const pharmaciesDTO: PharmacyDTO[] = deserializeArray<PharmacyDTO>(PharmacyDTO, JSON.stringify(allPharmacies.docs));
    return {...allPharmacies, docs: pharmaciesDTO};
  }

  async findById(id: string): Promise<PharmacyDTO> {
    const pharmacy: IPharmacy = await this.repository.findById(id);
    return plainToClass<PharmacyDTO, IPharmacy>(PharmacyDTO, pharmacy.toJSON({virtuals: true}), {excludePrefixes: ['_']});
  }

  async findByGeolocation(search: SearchDTO, limit: number, offset: number): Promise<PaginateResult<PharmacyDTO>> {
    const nearestPharmacies: PaginateResult<IPharmacy> = await this.repository.findByGeolocation(search, limit, offset);
    const pharmaciesDTO: PharmacyDTO[] = deserializeArray<PharmacyDTO>(PharmacyDTO, JSON.stringify(nearestPharmacies.docs));
    return {...nearestPharmacies, docs: pharmaciesDTO};
  }

  async overwriteProducts(id: string, products: ProductDTO[]): Promise<void> {
    await this.repository.overwriteProducts(id, products);
  }

  async addNewProduct(id: string, product: ProductDTO): Promise<void> {
    await this.repository.addNewProduct(id, product);
  }

  async updateProduct(id: string, productId: string, product: ProductDTO): Promise<void> {
    await this.repository.updateProduct(id, productId, product);
  }
}
