export class LocationVO {
  type = 'Point';
  coordinates: number[];
  constructor(coordinates: number[]) {
    this.coordinates = coordinates;
  }
}
