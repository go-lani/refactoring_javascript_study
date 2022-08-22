let defaultOwner = { firstName: '마틴', lastName: '파울러' };

//? spread 연산자 사용하여 객체 복사
// export function getDefaultOwner() {
//   return {...defaultOwner};
// }

//? Object.assign 사용
// export function getDefaultOwner() {
//   return Object.assign(defaultOwner);
// }

//? class 사용하여 get, set 분리 (only getter)
export class GetDefaultOwner {
  #firstName;
  #lastName;

  constructor(firstName, lastName){
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  get firstName() {
    return this.#firstName;
  }

  get lastName() {
    return this.#lastName;
  }
}