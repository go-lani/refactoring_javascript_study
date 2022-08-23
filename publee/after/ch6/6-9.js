export class Reading {
  #customer;
  #quantity;
  #month;
  #year;

  constructor(reading) {
    this.#customer = reading.customer;
    this.#quantity = reading.quantity;
    this.#month = reading.month;
    this.#year = reading.year;
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

  get baseRate() {
    if (this.year === 2017 && this.month === 5) return 0.1;
    return 0.2;
  }

  get calculateBaseCharge() {
    return this.baseRate * this.quantity;
  }

  get taxThreshold() {
    return 0.1;
  }

  get taxableCharge() {
    return Math.max(0, this.calculateBaseCharge - this.taxThreshold);
  }
}

const reading = { customer: "ivan", quantity: 10, month: 5, year: 2017 };

function acquireReading() {
  return reading;
}

const rowReading = acquireReading();
const aReading = new Reading(rowReading);
const baseRate = aReading.baseRate;
const calculateBaseCharge = aReading.calculateBaseCharge;
const taxableCharge = aReading.taxableCharge;
