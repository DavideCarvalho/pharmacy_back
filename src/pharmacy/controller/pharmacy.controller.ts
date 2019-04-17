import {Body, Controller, Post} from '@nestjs/common';
import { PharmacyService } from '../service';
import { PharmacyVO } from '../vo';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Post()
  getHello(@Body() pharmacy: PharmacyVO ): Promise<PharmacyVO> {
    return this.pharmacyService.create(pharmacy);
  }
}
