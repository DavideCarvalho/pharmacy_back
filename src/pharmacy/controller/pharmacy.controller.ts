import { Body, Controller, Get } from '@nestjs/common';
import { PharmacyService } from '../service';
import { PharmacyVO } from '../vo';

@Controller()
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  getHello(@Body() pharmacy: PharmacyVO ): Promise<PharmacyVO> {
    return this.pharmacyService.create(pharmacy);
  }
}
