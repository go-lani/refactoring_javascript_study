export class Account {
  #daysOverdrawn;

  constructor(accountType, daysOverdrawn) {
    this.type = accountType;
    this.#daysOverdrawn = daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this.#daysOverdrawn > 0)
      result += this.type.overdraftCharge(this.#daysOverdrawn);
    return result;
  }

  get daysOverdrawn() {
    return this.#daysOverdrawn;
  }
}

export class AccountType {
  #type;
  constructor(type) {
    this.#type = type;
  }
  get isPremium() {
    return this.#type === 'Premium';
  }

  //? premium 하나로.. 이렇게 분리하는게 뭔가 어색함...
  //? 클래스명은 accountType이지만, 결국 메소드는 charge를 구하는 메소드가 들어가있는게 좀 어색하다랄까..
  //? 결론, 굳이 나눌 필요가 있을까 싶음..
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (daysOverdrawn - 7) * 0.85;
    } else return daysOverdrawn * 1.75;
  }
}
