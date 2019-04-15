import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {PharmacySchema} from './domain';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'pharmacy', schema: PharmacySchema },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class PharmacyModule {}
