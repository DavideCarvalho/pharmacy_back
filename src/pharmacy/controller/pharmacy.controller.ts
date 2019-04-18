import {Body, Controller, Get, Post} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PharmacyService } from '../service';
import { PharmacyVO } from '../vo';
import {PharmacyDTO} from '../dto';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly service: PharmacyService) {}

  @Post()
  async createPharmacy(@Body() pharmacy: PharmacyVO): Promise<PharmacyVO> {
    const savedPharmacy: PharmacyDTO = await this.service.create(pharmacy);
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, savedPharmacy);
  }

  @Get()
  async findAll(): Promise<PharmacyVO[]> {
    const allPharmacies = await this.service.find();
    return plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, allPharmacies);
  }
}
