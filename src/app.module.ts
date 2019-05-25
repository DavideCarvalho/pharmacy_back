import {Module} from '@nestjs/common';
import {HelloWorldModule} from './hello-world';
import {PharmacyModule} from './pharmacy';
import { OauthModule } from './oauth';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://root:root@develop-shard-00-00-iex48.gcp.mongodb.net:27017,develop-shard-00-01-iex48.gcp.mongodb.net:27017,develop-shard-00-02-iex48.gcp.mongodb.net:27017/test?ssl=true&replicaSet=develop-shard-0&authSource=admin&retryWrites=true',
      {useNewUrlParser: true},
    ),
    HelloWorldModule,
    PharmacyModule,
    OauthModule,
  ],
})
export class AppModule {
}
