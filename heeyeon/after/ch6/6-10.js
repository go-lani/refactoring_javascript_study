import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function acquireReading() {
  return reading;
}

export function enrichReading(original) {
  const reading = _.cloneDeep(original);

  reading.baseRate = (reading.year === 2017 && reading.month === 5) ? 0.1 : 0.2;
  reading.baseCharge = reading.baseRate * reading.quantity;

  return reading;
}

// export function calculateCharge(reading){
//   return reading.baseRate() * reading.quantity;
// }

// export function baseRate(month, year) {
//   if (year === 2017 && month === 5) return 0.1;
//   return 0.2;
// }
