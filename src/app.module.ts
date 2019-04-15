import { Module } from '@nestjs/common';
import { HelloWorldModule } from './hello-world';
import { PharmacyModule } from './pharmacy';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    HelloWorldModule,
    PharmacyModule,
    MongooseModule.forRoot(`${process.env.DATA_MONGODB_HOST}:27017`),
  ],
})
export class AppModule {}
