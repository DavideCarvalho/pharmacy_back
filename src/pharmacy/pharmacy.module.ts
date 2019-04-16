import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Pharmacy } from './domain';
import { PharmacyService } from './service';
import { PharmacyController } from './controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Pharmacy', schema: Pharmacy }]),
  ],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
