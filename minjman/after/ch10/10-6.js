export class Discount {
  #discountRate;
  constructor() {
    this.#discountRate = 0;
  }
  set discountRate(value) {
    if (value < 0) {
      throw new Error('discountRate must over zero');
    }
    this.#discountRate = value;
  }
  applyDiscount(number) {
    return this.#discountRate ? number - this.#discountRate * number : number;
  }
}
