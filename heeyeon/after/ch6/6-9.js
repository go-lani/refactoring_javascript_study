export function acquireReading() {
  return reading;
}

export class AcquireReading {
  #customer;
  #quantity;
  #month;
  #year;

  constructor({customer, quantity, month, year}){
    this.#customer = customer;
    this.#quantity = quantity;
    this.#month = month;
    this.#year = year;
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

  baseRate() {
    return (this.#month === 2017 && this.#year === 5) ? 0.1 : 0.2;
  }

  baseCharge(){
    return this.baseRate() * this.#quantity;
  }

  taxThreshold() {
    return 0.1;
  }
  
  taxableCharge(){
    return Math.max(0, this.baseCharge() - this.taxThreshold());
  } 
}

export const reading = new AcquireReading({
  customer: 'ivan',
  quantity: 10,
  month: 5,
  year: 2017 
})


