// 1. 하나의 데이터와 관련된 get과 set은 해당 데이터만 다룰 것!
// 2. 하나의 데이터가 업데이트 될 때 다른 데이터에도 영향을 끼친다면, 일일이 업데이트를 시키는 것이 아니라, 해당 데이터를 조회할 때 실시간으로 업데이트 반영할 것!

// 예제 1
// 리팩토링 버전
export class Order {
  constructor(discount, baseTotal) {
    this._discount = discount;
    this._baseTotal = baseTotal;
  }

  get discountedTotal() {
    return this._baseTotal - this._discount;
  }
  set discount(value) {
    this._discount = value;
  }
  get discount() {
    return this._discount;
  }
}

// 예제1 기존버전
// export class Order {
//   constructor(discount) {
//     this._discount = discount;
//     this._discountedTotal = discount;
//   }

//   get discountedTotal() {
//     return this._discountedTotal;
//   }
//   set discount(newDiscount) {
//     const oldDiscount = this._discount;
//     this._discount = newDiscount;
//     this._discountedTotal += oldDiscount - newDiscount;
//   }
//   get discount() {
//     return this._discount;
//   }
// }

// 예제 2
export class ProductionPlan {
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
