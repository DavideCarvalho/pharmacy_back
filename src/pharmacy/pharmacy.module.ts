import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Pharmacy} from './domain';
import {PharmacyService} from './service';
import {PharmacyController} from './controller';
import {PharmacyRepository} from './repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Pharmacy', schema: Pharmacy}]),
  ],
  controllers: [PharmacyController],
  providers: [
    PharmacyService,
    PharmacyRepository,
  ],
})
export class PharmacyModule {
}
