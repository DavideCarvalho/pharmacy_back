import {Controller, Get} from '@nestjs/common';
import {HelloWorldService} from '../service/hello-world.service';

@Controller()
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {
  }

  @Get()
  getHello(): string {
    return this.helloWorldService.getHello();
  }
}
