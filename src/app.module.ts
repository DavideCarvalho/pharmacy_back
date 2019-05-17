import {Module} from '@nestjs/common';
import {HelloWorldModule} from './hello-world';
import {PharmacyModule} from './pharmacy';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.DATA_DB_HOST}:${process.env.DATA_DB_PORT}/${process.env.DATA_DB_NAME}`,
      {useNewUrlParser: true},
    ),
    HelloWorldModule,
    PharmacyModule,
  ],
})
export class AppModule {
}
