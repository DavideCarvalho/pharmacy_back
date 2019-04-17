import { LocationDTO } from './location.dto';
import {ProductDTO} from './product.dto';

export class PharmacyDTO {
  constructor(
    private _name: string,
    private _deleted: boolean = false,
    private _location: LocationDTO,
    private _products: ProductDTO[]) {}

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

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }

  get products(): ProductDTO[] {
    return this._products;
  }

  set products(value: ProductDTO[]) {
    this._products = value;
  }
}
