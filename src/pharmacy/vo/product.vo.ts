export class ProductVO {
  name: string;
  value: number;
  descount: number;
  constructor(name: string, value: number, descount: number) {
    this.name = name;
    this.value = value;
    this.descount = descount;
  }
}
