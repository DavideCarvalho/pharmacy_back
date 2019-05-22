import {Module} from '@nestjs/common';
import {HelloWorldModule} from './hello-world';
import {PharmacyModule} from './pharmacy';
import {MongooseModule} from '@nestjs/mongoose';

const mongoAtlas = "mongodb+srv://root:root@develop-iex48.gcp.mongodb.net/test?retryWrites=true"
const mongoUrl = `mongodb://${process.env.DATA_DB_HOST}:${process.env.DATA_DB_PORT}/${process.env.DATA_DB_NAME}`;


@Module({
  imports: [
    MongooseModule.forRoot(
      mongoAtlas,
      {useNewUrlParser: true},
    ),
    HelloWorldModule,
    PharmacyModule,
  ],
})
export class AppModule {
}
