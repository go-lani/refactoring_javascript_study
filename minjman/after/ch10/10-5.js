export class Site {
  constructor(customer) {
    this._customer = customer;
  }
  get customer() {
    return this._customer === 'unknown'
      ? new UnknownCustomer()
      : new Customer(this._customer);
  }
}

class Customer {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

class UnknownCustomer extends Customer {
  get name() {
    return 'occupant';
  }
}

// 사용하는 부분
export function customerName(site) {
  const aCustomer = site.customer;
  // 더 많은 코드가 여기에 있음
  const customerName = aCustomer.name;
  return customerName;
}

// const site1 = new Site('kim');
// const site2 = new Site('unknown');
// console.log(customerName(site1));
// console.log(customerName(site2));
