import { Module } from '@nestjs/common';
import { HelloWorldModule } from './hello-world';
import { PharmacyModule } from './pharmacy';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forRoot(`mongodb://${process.env.DATA_DB_HOST}:27017/pharmacy`, { useNewUrlParser: true }),
    HelloWorldModule,
    // PharmacyModule,
  ],
})
export class AppModule {}
