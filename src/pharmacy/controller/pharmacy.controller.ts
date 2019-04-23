import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common';
import {plainToClass} from 'class-transformer';
import {PharmacyService} from '../service';
import {PharmacyVO, SearchVO} from '../vo';
import {PharmacyDTO, SearchDTO} from '../dto';
import {PaginateResult} from 'mongoose';

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
    const allPharmacies: PharmacyDTO[] = await this.service.find();
    return plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, allPharmacies);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PharmacyVO> {
    const pharmacy: PharmacyDTO = await this.service.findById(id);
    return plainToClass<PharmacyVO, PharmacyDTO>(PharmacyVO, pharmacy);
  }

  @Get('nearest')
  async getNearest(@Headers('coordinates') coordinates: string,
                   @Headers('product') product: string,
                   @Headers('limit') limit: number = 10,
                   @Headers('offset') offset: number = 0): Promise<PaginateResult<PharmacyVO>> {
    const nearestPharmacies: PaginateResult<PharmacyDTO> = await this.service.findByGeolocation(
      plainToClass<SearchVO, SearchDTO>(SearchDTO, { coordinates: JSON.parse(coordinates), product }),
    );
    const pharmaciesVO: PharmacyVO[] = plainToClass<PharmacyVO, PharmacyDTO[]>(PharmacyVO, nearestPharmacies.docs, { excludePrefixes: ['_'] });
    return { ...nearestPharmacies, docs: pharmaciesVO };
  }
}
