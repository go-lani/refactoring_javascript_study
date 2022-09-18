// 예제 1
export class Order {
  #discountedTotal;
  #discount;

  constructor() {
    this.#discount = 0;
    this.#discountedTotal = 10;
  }

  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this.#discountedTotal - this.#discount;
  }
  set discount(value) {
    this.#discount = value;
  }
}

// 예제 2
export class ProductionPlan {
  #production;
  #adjustments;
  constructor() {
    this.#production = 0;
    this.#adjustments = [];
  }
  // 다른 코드 있다고 가정
  get production() {
    return this.#adjustments.reduce((acc, cur) => acc + cur.amount, 0);
  }
  applyAdjustment(adjustment) {
    this.#adjustments.push(adjustment);
    this.#production += adjustment.amount;
  }
}
