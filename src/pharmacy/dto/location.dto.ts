export class LocationDTO {
  type = 'Point';
  coordinates: number[];
  constructor(coordinates: number[]) {
    this.coordinates = coordinates;
  }
}
