import {Injectable} from '@nestjs/common';
import {deserializeArray, plainToClass} from 'class-transformer';
import { IPharmacy } from '../interface';
import {PharmacyDTO, SearchDTO} from '../dto';
import { PharmacyRepository } from '../repository';
import {PaginateResult} from 'mongoose';

@Injectable()
export class PharmacyService {

  constructor(
    private readonly repository: PharmacyRepository,
  ) {
  }

  async create(pharmacy: PharmacyDTO): Promise<PharmacyDTO> {
    const savedPharmacy: IPharmacy = await this.repository.save(pharmacy);
    return plainToClass<PharmacyDTO, IPharmacy>(PharmacyDTO, savedPharmacy.toJSON({ virtuals: true }), { excludePrefixes: ['_'] });
  }

  async find(): Promise<PharmacyDTO[]> {
    const allPharmacies: IPharmacy[] = await this.repository.find();
    return plainToClass<PharmacyDTO, IPharmacy[]>(PharmacyDTO, allPharmacies, { excludePrefixes: ['_'] });
  }

  async findById(id: string): Promise<PharmacyDTO> {
    const pharmacy: IPharmacy = await this.repository.findById(id);
    return plainToClass<PharmacyDTO, IPharmacy>(PharmacyDTO, pharmacy.toJSON({ virtuals: true }), { excludePrefixes: ['_'] });
  }

  async findByGeolocation(search: SearchDTO): Promise<PaginateResult<PharmacyDTO>> {
    const nearestPharmacies: PaginateResult<IPharmacy> = await this.repository.findByGeolocation(search);
    const pharmaciesDTO: PharmacyDTO[] = deserializeArray<PharmacyDTO>(PharmacyDTO, JSON.stringify(nearestPharmacies.docs));
    return { ...nearestPharmacies, docs: pharmaciesDTO };
  }
}
