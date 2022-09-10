export class Account {
  constructor(number, type) {
    this._number = number;
    this._type = type;
  }

  get interestRate() {
    return this._type.interestRate;
  }
}

export class AccountType {
  #interestRate;
  constructor(nameString, interestRate) {
    this._name = nameString;
    this.#interestRate = interestRate;
  }
  get interestRate() {
    return this.#interestRate;
  }
}
