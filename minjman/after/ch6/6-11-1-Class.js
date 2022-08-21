export class Price {
  #product;
  #shippingMethod;
  #quantity;
  constructor(product, quantity, shippingMethod) {
    this.#product = product;
    this.#quantity = quantity;
    this.#shippingMethod = shippingMethod;
  }

  get basePrice() {
    return this.#product.basePrice * this.#quantity;
  }

  get discount() {
    const { basePrice, discountRate, discountThreshold } = this.#product;
    return Math.max(this.#quantity - discountThreshold, 0) * basePrice * discountRate;
  }

  get shippingPerCase() {
    const { discountThreshold, feePerCase, discountedFee } = this.#shippingMethod;
    return this.basePrice > discountThreshold ? discountedFee : feePerCase;
  }

  get shippingCost() {
    return this.#quantity * this.shippingPerCase;
  }

  get price() {
    return this.basePrice - this.discount + this.shippingCost;
  }
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const { price } = new Price(product, 5, shippingMethod);
// console.log(price);
