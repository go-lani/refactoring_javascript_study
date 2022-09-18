export class RepositoryData {
  #customer;

  constructor() {
    this.#customer = new Map();
  }

  registerCustomer(id) {
    if (!this.#customer.has(id)) {
      this.#customer.set(id, new Customer(id));
    }

    return id;
  }

  findCustomer(id) {
    this.#customer.get(id);
  }
}

const repositoryData = new RepositoryData();

export class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = repositoryData.findCustomer(data.customerId);
  }

  get customer() {
    return this._customer;
  }
}

export class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}
