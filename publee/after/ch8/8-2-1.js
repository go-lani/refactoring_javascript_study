//! 좀 햇갈림..? 왜 사용하는지 모르겠음..

export class Customer {
  #name;
  #contract;
  #discountRate;
  constructor(name, discountRate) {
    this.#name = name;
    this.#contract = new CustomerContract(this.dateToday());
    this._setDiscountRate(discountRate);
  }

  get discountRate() {
    return this.#contract.discountRate;
  }

  _setDiscountRate(aNumber) {
    this.#contract.discountRate = aNumber;
  }

  becomePreferred() {
    this._setDiscountRate((this.#discountRate += 0.03));
    // 다른 코드들이 있음...
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.#discountRate));
  }

  dateToday() {
    return new Date();
  }
}

class CustomerContract {
  #startDate;
  #discountRate;
  constructor(startDate, discountRate) {
    this.#startDate = startDate;
    this.#discountRate = discountRate;
  }

  get discountRate() {
    return this.#discountRate;
  }

  set discountRate(arg) {
    this.#discountRate = arg;
  }
}
