export class Shipment {
  #shippingCompany;
  #trackingNumber;
  constructor(trackingNumber, shippingCompany) {
    this.#trackingNumber = trackingNumber;
    this.#shippingCompany = shippingCompany;
  }

  get trackingInfo() {
    return `${this.#shippingCompany}: ${this.#trackingNumber}`;
  }

  get shippingCompany() {
    return this.#shippingCompany;
  }

  set shippingCompany(arg) {
    this.#shippingCompany = arg;
  }

  get trackingNumber() {
    return this.#trackingNumber;
  }

  set trackingNumber(arg) {
    this.#trackingNumber = arg;
  }
}

const shipment = new Shipment(999, 'Maersk');
// console.log(shipment.trackingInfo);

shipment.shippingCompany = 'COSCO';
// console.log(shipment.trackingInfo);
