export class ProductDTO {
  private name: string;
  private value: number;
  private descount: number;
  private deleted: boolean = false;

  constructor(name: string, value: number, descount: number, deleted: boolean = false) {
    this.name = name;
    this.value = value;
    this.descount = descount;
    this.deleted = deleted;
  }
}
