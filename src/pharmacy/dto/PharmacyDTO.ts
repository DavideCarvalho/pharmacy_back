import {LocationDTO} from './LocationDTO';

export class PharmacyDTO {
  constructor(private _name: string, private _location: LocationDTO) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get location(): LocationDTO {
    return this._location;
  }

  set location(value: LocationDTO) {
    this._location = value;
  }
}
