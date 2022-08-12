export default class Book {
  #reservations;
  constructor() {
    this.#reservations = [];
  }

  // 우선순위에 따라 따로 관리해야하는 기능이 생길 경우, boolean 값을 가지는 매개변수를 추가하므로서 기능을 구현할 수 있다.
  addReservation(customer, isPriority = false) {
    if (isPriority) {
      this.#reservations.unshift(customer);
    } else {
      this.#reservations.push(customer);
    }
  }

  hasReservation(customer) {
    return this.#reservations.some(
      (reservedCustomer) => reservedCustomer.id === customer.id
    );
  }

  get firstCustomer() {
    return this.#reservations[0];
  }
}
