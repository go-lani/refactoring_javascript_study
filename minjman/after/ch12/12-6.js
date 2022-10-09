export class Employee {
  #name;
  constructor(name) {
    // 생성자 함수에서 에러를 발생시키는 것은 좋지 않다.
    this.#name = name;
  }
  toString() {
    return `${this.#name} (${this.type})`;
  }
  static createEmployee(name, type) {
    switch (type) {
      case 'engineer':
        return new Engineer(name, type);
      case 'manager':
        return new Manager(name, type);
      case 'salesperson':
        return new Salesperson(name, type);
      default:
        throw new Error(`${type}라는 직원 유형은 존재하지 않습니다.`);
    }
  }
}

class Engineer extends Employee {
  get type() {
    return 'engineer';
  }
}

class Manager extends Employee {
  get type() {
    return 'manager';
  }
}

class Salesperson extends Employee {
  get type() {
    return 'salesperson';
  }
}

const ellie = Employee.createEmployee('엘리', 'engineer');
const bob = Employee.createEmployee('밥', 'manager');
