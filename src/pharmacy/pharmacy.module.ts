import {HttpModule, Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {Pharmacy} from './domain';
import {PharmacyService} from './service';
import {PharmacyController} from './controller';
import {PharmacyRepository} from './repository';
import {GoogleMapsIntegration} from './integration';
import {GoogleMapsService} from './service/google-maps.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'Pharmacy', schema: Pharmacy}]),
    HttpModule,
  ],
  controllers: [PharmacyController],
  providers: [
    PharmacyService,
    PharmacyRepository,
    GoogleMapsIntegration,
    GoogleMapsService,
  ],
})
export class PharmacyModule {
}
