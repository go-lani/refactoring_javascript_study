export class TelephoneNumber {
  #areaCode;
  #number

  constructor(areaCode, number) {
    this.#areaCode = areaCode;
    this.#number = number;
  }

  get areaCode() {
    return this.#areaCode;
  }

  get number() {
    return this.#number;
  }

  get areaNumber() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

export class Person {
  #name;
  #TelephoneNumber

  constructor(name, areaCode, number) {
    this.#name = name;
    this.#TelephoneNumber = new TelephoneNumber(areaCode, number);
  }

  get name() {
    return this.#name;
  }

  get officeAreaCode() {
    return this.#TelephoneNumber.areaCode;
  }

  get officeNumber() {
    return this.#TelephoneNumber.number;
  }

  get telephoneNumber() {
    return this.#TelephoneNumber.areaNumber;
  }
}

const person = new Person('엘리', '010', '12345678');
console.log(person.name);
console.log(person.officeAreaCode);
console.log(person.officeNumber);
console.log(person.telephoneNumber);
