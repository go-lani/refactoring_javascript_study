export class Site {
  constructor(customer) {
    this._customer = customer;
  }

  get customer() {
    return this._customer === 'unknown'
      ? new unknownCustomer()
      : new Customer();
  }
}

export class unknownCustomer extends Customer {
  get name() {
    return 'occupant';
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

// 사용하는 부분
export function customerName(site) {
  // 더 많은 코드가 여기에 있음
  return site.customer.name;
}
