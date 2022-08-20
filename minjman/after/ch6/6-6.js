export class Person {
  #firstName;
  #lastName;
  constructor(data) {
    this.#firstName = data.firstName;
    this.#lastName = data.lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}

const defaultOwner = new Person({ firstName: '마틴', lastName: '파울러' });

export function getOwner(owner) {
  return owner;
}

const owner = getOwner(defaultOwner);
// console.log(owner.firstName);
// console.log(owner.lastName);
//! Cannot set property firstName of #<Person> which has only a getter
// owner.firstName = '엘리';
