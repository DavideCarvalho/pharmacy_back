import {Module} from '@nestjs/common';
import {HelloWorldModule} from './hello-world';
import {PharmacyModule} from './pharmacy';
import { OauthModule } from './oauth';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.APPSETTING_DATA_DB_HOST}:${process.env.APPSETTING_DATA_DB_PORT}/${process.env.APPSETTING_DATA_DB_NAME}`,
      {useNewUrlParser: true},
    ),
    HelloWorldModule,
    PharmacyModule,
    OauthModule,
  ],
})
export class AppModule {
}
