class Order {
  constructor(aRecord) {
    this.record = aRecord;
  }

  get price() {
    const basePrice = this.record.quantity * this.record.itemPrice;
    const quantityDiscount =
      Math.max(0, this.record.quantity - 500) * this.record.itemPrice * 0.05;
    const deliveryCharge = Math.min(basePrice * 0.1, 100);

    return basePrice - quantityDiscount + deliveryCharge;
  }
}

export default Order;
