// 이런 방식은 Person 객체와 Phone 객체의 의존성이 높아지는 것이지 않나...?
// 의존성은 낮은 것이 더 좋은 것으로 알고 있는데..?
export class Person {
  #name;
  #phone
  constructor(name, phone) {
    this.#name = name;
    this.#phone = phone;
  }

  get name() {
    return this.#name;
  }
  set name(arg) {
    this.#name = arg;
  }
  get telephoneNumber() {
    return this.#phone.telephoneNumber;
  }
  get officeAreaCode() {
    return this.#phone.areaCode;
  }
  set officeAreaCode(arg) {
    this.#phone.areaCode = arg;
  }
  get officeNumber() {
    return this.#phone.number;
  }
  set officeNumber(arg) {
    this.#phone.number = arg;
  }
}

export class Phone {
  #areaCode;
  #number;
  constructor(code, number) {
    this.#areaCode = code;
    this.#number = number;
  }
  get areaCode() {
    return this.#areaCode;
  }
  set areaCode(code) {
    this.#areaCode = code;
  }
  get number() {
    return this.#number;
  }
  set number(number) {
    this.#number = number;
  }
  get telephoneNumber() {
    return `(${this.#areaCode}) ${this.#number}`;
  }
}

const phone = new Phone('010', '12345678');
const person = new Person('엘리', phone);
// console.log(person.name);
// console.log(person.officeAreaCode);
// console.log(person.officeNumber);
// console.log(person.telephoneNumber);
