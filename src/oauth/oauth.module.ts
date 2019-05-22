import {Module} from '@nestjs/common';
import {OauthController} from './controller';
import {OauthService} from './service';
import {MongooseModule} from '@nestjs/mongoose';
import {Role, User} from './domain';
import {OauthRepository} from './repository';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: User}]),
    MongooseModule.forFeature([{name: 'Role', schema: Role}]),
  ],
  controllers: [
    OauthController,
  ],
  providers: [
    OauthService,
    OauthRepository,
  ],
})
export class OauthModule {
}
