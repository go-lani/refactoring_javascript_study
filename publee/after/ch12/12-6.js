class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  toString() {
    return `${this.#name} (${this.#type})`;
  }

  //? API로 받아올때..?
  static createEmployee(name, type) {
    switch (type) {
      case 'engineer':
        return new Engineer(name, type);
      case 'manager':
        return new Manager(name, type);
      case 'salesperson':
        return new Salesperson(name, type);
      default:
        throw new Error(`${type}라는 직원 유형은 없습니다.`);
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

const ellie = new Engineer('엘리');
const bob = new Manager('밥');
