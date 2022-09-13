//? 이게 뭐여... 이해 1도 안감...ㅠㅠㅠ
export class Account {
  #number;
  #type;
  #interestRate;
  constructor(number, type) {
    this.#number = number;
    this.#type = new AccountType(type, 0.85);
    this.#interestRate = this.#type.interestRate;
  }

  get interestRate() {
    return this.#type.interestRate;
  }
}

class AccountType {
  #name;
  #interestRate;
  constructor(nameString, interestRate) {
    this.#name = nameString;
    this.#interestRate = interestRate;
  }

  get interestRate() {
    return this.#interestRate;
  }
}
