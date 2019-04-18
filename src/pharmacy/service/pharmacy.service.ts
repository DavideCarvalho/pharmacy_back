import {Injectable} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { IPharmacy } from '../interface';
import { PharmacyDTO } from '../dto';
import { PharmacyVO } from '../vo';
import { PharmacyRepository } from '../repository';

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
    return plainToClass<PharmacyDTO, IPharmacy[]>(PharmacyDTO, allPharmacies);
  }
}
