export class Order {
  #quantity;
  #item;
  constructor(quantity, item) {
    this.#quantity = quantity;
    this.#item = item;
  }

  get basePrice() {
    return this.#quantity * this.#item.price;
  }

  get discount() {
    let discount = 0.98;
    if (this.basePrice > 1000) discount -= 0.03;
    return discount;
  }

  get price() {
    return this.basePrice * this.discount;
  }
}
