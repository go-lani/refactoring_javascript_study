export class Site {
  #customer;
  constructor(customer) {
    this.#customer = customer;
  }

  get customer() {
    return this.#customer === 'unknown'
      ? new UnknownCustomer()
      : new Customer(this.#customer);
  }
}

export class Customer {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get billingPlan() {
    //
  }

  set billingPlan(arg) {
    //
  }

  get paymentHistory() {
    //
  }
}

class UnknownCustomer extends Customer {
  constructor(props) {
    super(props);
  }

  get name() {
    return 'occupant';
  }
}

// 사용하는 부분
export function customerName(site) {
  return site.customer.name;
}
