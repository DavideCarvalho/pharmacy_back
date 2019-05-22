import {Controller, HttpCode, HttpException, HttpStatus, Post} from '@nestjs/common';
import {OauthService} from '../service';

@Controller('oauth')
export class OauthController {

  constructor(
    private readonly service: OauthService,
  ){}

  @Post('/token')
  async authenticateUser(): Promise<string> {
    // throw new HttpException({
    //   error: 'User not found',
    //   status: HttpStatus.NOT_FOUND,
    // }, HttpStatus.NOT_FOUND);
    const user = await this.service.getUser();
    return 'oie';
  }
}
