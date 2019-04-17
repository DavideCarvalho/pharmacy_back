export class ProductDTO {
  constructor(
    private _name: string,
    private _value: number,
    private _descount: number,
    private _deleted: boolean = false) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get descount(): number {
    return this._descount;
  }

  set descount(value: number) {
    this._descount = value;
  }

  get deleted(): boolean {
    return this._deleted;
  }

  set deleted(value: boolean) {
    this._deleted = value;
  }
}
