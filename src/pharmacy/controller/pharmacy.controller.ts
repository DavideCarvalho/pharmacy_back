import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PharmacyService } from '../service';
import { PharmacyVO } from '../vo';
import {PharmacyDTO} from '../dto';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly service: PharmacyService) {}

  @Post()
  async createPharmacy(@Body() pharmacy: PharmacyVO): Promise<PharmacyVO> {
    const savedPharmacy: PharmacyDTO = await this.service.create(
      plainToClass<PharmacyDTO, PharmacyVO>(PharmacyDTO, pharmacy),
    );
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, savedPharmacy);
  }

  @Get()
  async findAll(): Promise<PharmacyVO[]> {
    const allPharmacies = await this.service.find();
    return plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, allPharmacies);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const pharmacy = await this.service.findById(id);
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, pharmacy);
  }
}
