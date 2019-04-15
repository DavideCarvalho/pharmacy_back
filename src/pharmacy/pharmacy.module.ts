import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {PharmacySchema} from './domain';
import {PharmacyService} from './service';
import { PharmacyController } from './controller';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'pharmacy', schema: PharmacySchema },
    ]),
  ],
  controllers: [PharmacyController],
  providers: [PharmacyService],
})
export class PharmacyModule {}
