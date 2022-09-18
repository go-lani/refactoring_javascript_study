// 예제 1
export class Order {
  // 다른 코드 있다고 가정
  get discountedTotal() {
    return this._price - this._discount;
  }

  set discount(value) {
    return (this._discount = value);
  }
}

// 예제 2
export class ProductionPlan {
  // 다른 코드 있다고 가정
  get production() {
    return this._adjustments.reduce(
      (acc, adjustment) => acc + adjustment.amount,
      0,
    );
  }

  applyAdjustment(adjustment) {
    this._adjustments.push(adjustment);
  }
}
