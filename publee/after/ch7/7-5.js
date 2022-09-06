export class Telephone {
  #areaCode;
  #number;

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

  get telephoneNumber() {
    return `(${this.areaCode}) ${this.number}`;
  }
}

export class Person {
  #name;
  #telephone;

  constructor(name, telephone) {
    this.#name = name;
    this.#telephone = telephone;
  }

  get name() {
    return this.#name;
  }

  get officeAreaCode() {
    return this.#telephone.areaCode;
  }

  get officeNumber() {
    return this.#telephone.number;
  }

  get telephoneNumber() {
    return this.#telephone.telephoneNumber;
  }
}

const telephone = new Telephone('010', '12345678');
const person = new Person('엘리', telephone);