import {Module} from '@nestjs/common';
import {HelloWorldModule} from './hello-world';
import {PharmacyModule} from './pharmacy';
import { OauthModule } from './oauth';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.DATA_DB_HOST || '127.0.0.1'}:${process.env.DATA_DB_PORT || 27017}/${process.env.DATA_DB_NAME || 'pharmacy'}`,
      {useNewUrlParser: true},
    ),
    HelloWorldModule,
    PharmacyModule,
    OauthModule,
  ],
})
export class AppModule {
}
