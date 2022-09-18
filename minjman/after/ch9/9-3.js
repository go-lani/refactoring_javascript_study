// set이 아니라,

// 예제 1
class Order {
  constructor(discount) {
    this._discount = discount;
  }

  get discountedTotal() {
    return this._baseTotal - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
}

// 예제 2
class ProductionPlan {
  // 다른 코드 있다고 가정
  constructor() {
    this._adjustments = [];
  }

  get production() {
    return this._adjustments.reduce((acc, cur) => acc + cur.amount, 0);
  }
  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
