// 1. 하나의 데이터와 관련된 get과 set은 해당 데이터만 다룰 것!
// 2. 하나의 데이터가 업데이트 될 때 다른 데이터에도 영향을 끼친다면, 일일이 업데이트를 시키는 것이 아니라, 해당 데이터를 조회할 때 실시간으로 업데이트 반영할 것!

//? 아래 예제1의 경우, 기존 코드가 더 맞지 않을까?
//? discountedTotal 값은 old - new 한 값을 더한 값인데, 어떻게 반영할 것인지 의문
// 예제 1
// 리팩토링 버전
// class Order {
//   constructor(discount) {
//     this._discount = discount;
//   }

//   get discountedTotal() {
//     return this._baseTotal - this._discount;
//   }
//   set discount(value) {
//     this._discount = value;
//   }
//   get discount() {
//     return this._discount;
//   }
// }

// 기존버전
export class Order {
  constructor(discount) {
    this._discount = discount;
    this._discountedTotal = discount;
  }

  get discountedTotal() {
    return this._discountedTotal;
  }
  set discount(newDiscount) {
    const oldDiscount = this._discount;
    this._discount = newDiscount;
    this._discountedTotal += oldDiscount - newDiscount;
  }
  get discount() {
    return this._discount;
  }
}

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
