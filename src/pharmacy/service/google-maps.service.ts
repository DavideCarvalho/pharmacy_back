import {Injectable} from '@nestjs/common';
import {GoogleMapsIntegration} from '../integration';
import {GoogleMapsResponseModel} from '../model';
import {AxiosResponse} from 'axios';

@Injectable()
export class GoogleMapsService {

  constructor(
    private readonly integration: GoogleMapsIntegration,
  ) {}

  async getGeocoding(location: string): Promise<AxiosResponse<GoogleMapsResponseModel>> {
    return await this.integration.getGeocoding(location);
  }
}
