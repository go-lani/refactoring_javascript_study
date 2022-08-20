export class Reading {
  #customer;
  #quantity;
  #month;
  #year;
  constructor(data) {
    this.#customer = data.customer;
    this.#quantity = data.quantity;
    this.#month = data.month;
    this.#year = data.year;
  }

  get customer() {
    return this.#customer;
  }

  get quantity() {
    return this.#quantity;
  }

  get month() {
    return this.#month;
  }

  get year() {
    return this.#year;
  }

  getBaseRate(month, year) {
    if (year === this.#year && month === this.#month) {
      return 0.1;
    }
    return 0.2;
  }

  calculateBaseCharge(baseRate) {
    return baseRate * this.#quantity;
  }

  getTaxThreshold() {
    return 0.1;
  }

  calculateTaxableCharge(baseCharge) {
    return Math.max(0, baseCharge - this.getTaxThreshold());
  }
}


const reading = new Reading({ customer: 'ivan', quantity: 10, month: 5, year: 2017 });

//TODO client1 & client3
const baseRate = reading.getBaseRate(reading.month, reading.year);
const baseCharge = reading.calculateBaseCharge(baseRate);
// console.log(baseCharge);

//TODO client2
const taxableCharge = reading.calculateTaxableCharge(baseCharge);
// console.log(taxableCharge);
