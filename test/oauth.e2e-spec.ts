import {Test} from '@nestjs/testing';
import * as request from 'supertest';
import {AppModule} from '../src/app.module';
import {INestApplication} from '@nestjs/common';

describe('OauthController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/oauth/token (POST)', () => {
    return request(app.getHttpServer())
      .post('/oauth/token')
      .send({
        email: 'user@teste.com',
        password: 'user123',
      })
      .expect(404);
  });

  afterAll(async () => {
    await app.close();
  });
});
