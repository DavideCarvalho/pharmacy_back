import { Module } from '@nestjs/common';
import { HelloWorldController } from './controller';
import { HelloWorldService } from './service';

@Module({
    controllers: [HelloWorldController],
    providers: [HelloWorldService],
})
export class HelloWorldModule {}
