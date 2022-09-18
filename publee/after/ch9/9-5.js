export class Order {
  #number;
  #customer;
  constructor(data, repository) {
    this.#number = data.number;
    this.#customer = repository.registerCustomer(data.customerId);
  }

  get customer() {
    return this.#customer;
  }
}

class Customer {
  #id;
  constructor(id) {
    this.#id = id;
  }

  get id() {
    return this.#id;
  }
}

export class Repository {
  #customers;
  constructor() {
    this.#customers = new Map();
  }

  registerCustomer(id) {
    if (!this.#customers.has(id)) {
      this.#customers.set(id, new Customer(id));
    }
    return this.findCustomer(id);
  }

  findCustomer(id) {
    return this.#customers.get(id);
  }
}
