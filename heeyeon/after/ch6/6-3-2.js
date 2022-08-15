export class Order {
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }
  get itemPrice() {
    return this._data.itemPrice;
  }

  get originPrice() {
    return this.quantity * this.itemPrice;
  }

  get discountCost() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  get deliveryCharge() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }

  get price() {
    return this.originPrice - this.discountCost + this.deliveryCharge;
  }
}
