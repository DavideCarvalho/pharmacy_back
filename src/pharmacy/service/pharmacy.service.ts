import {Injectable} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import {IPharmacy} from '../interface';
import {PharmacyDTO} from '../dto';
import {PharmacyVO} from '../vo';
import {PharmacyRepository} from '../repository';

@Injectable()
export class PharmacyService {

  constructor(
    private readonly repository: PharmacyRepository,
  ) {
  }

  async create(pharmacy: PharmacyVO): Promise<PharmacyDTO> {
    const savedPharmacy: IPharmacy = await this.repository.save(
      plainToClass<PharmacyDTO, PharmacyVO>(PharmacyDTO, pharmacy),
    );
    return plainToClass<PharmacyDTO, IPharmacy>(PharmacyDTO, savedPharmacy);
  }
}
