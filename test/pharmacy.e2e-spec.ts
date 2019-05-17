import {Test} from '@nestjs/testing';
import * as request from 'supertest';
import {AppModule} from '../src/app.module';
import {INestApplication} from '@nestjs/common';

describe('PharmacyController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pharmacy (GET)', () => {
    return request(app.getHttpServer())
      .get('/pharmacy')
      .expect(200)
      .expect({docs: [], total: 0, limit: 10, offset: 0});
  });

  afterAll(async () => {
    await app.close();
  });
});
