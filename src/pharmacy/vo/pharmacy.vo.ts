import {LocationVO} from './location.vo';
import {ProductVO} from './product.vo';

export class PharmacyVO {
  constructor(
    private _name: string,
    private _location: LocationVO,
    private _products: ProductVO[],
  ) {}

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

  get products(): ProductVO[] {
    return this._products;
  }

  set products(value: ProductVO[]) {
    this._products = value;
  }
}
