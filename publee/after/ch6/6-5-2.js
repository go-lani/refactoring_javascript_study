export default class Book {
  constructor() {
    this.reservedCustomers = [];
  }

  addReservedCustomers(customer) {
    this.reservedCustomers.push(customer);
  }

  isExistReservedCustomers(customer) {
    return this.reservedCustomers.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }
}
