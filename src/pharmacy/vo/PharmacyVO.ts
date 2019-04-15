import {LocationVO} from './LocationVO';

export class PharmacyVO {
  constructor(private _name: string, private _location: LocationVO){}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get location(): LocationVO {
    return this._location;
  }

  set location(value: LocationVO) {
    this._location = value;
  }
}
