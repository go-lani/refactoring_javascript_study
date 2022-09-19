export class CustomerRepository {
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

const customerRepository = new CustomerRepository();

export class Order {
  constructor(number, customer) {
    this._number = number;
    this._customer = customer;
  }

  get customer() {
    return this._customer;
  }
}

class Customer {
  constructor(id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }
}

const customer = customerRepository.registerCustomer(1);
const order = new Order(1, customer);
// console.log(customer.id);
// console.log(order.customer);
