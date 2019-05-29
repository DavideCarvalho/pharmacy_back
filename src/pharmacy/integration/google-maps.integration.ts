import {HttpService, Injectable} from '@nestjs/common';
import {GoogleMapsResponseModel} from '../model';
import {AxiosResponse} from 'axios';

@Injectable()
export class GoogleMapsIntegration {

  private googleMapsKey = process.env.APPSETTING_DATA_GOOGLE_API_KEY;
  private googleMapsBaseUrl = process.env.APPSETTING_DATA_GOOGLE_BASE_URL;

  constructor(
    private readonly httpService: HttpService,
  ) {
  }

  async getGeocoding(location: string): Promise<AxiosResponse<GoogleMapsResponseModel>> {
    return await this.httpService.get<GoogleMapsResponseModel>(`${this.googleMapsBaseUrl}/geocode/json`, {
      params: {
        address: location,
        key: this.googleMapsKey,
      },
    }).toPromise();
  }
}
