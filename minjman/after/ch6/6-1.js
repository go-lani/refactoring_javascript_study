import {
  printBanner,
  calculateOutstanding,
  recordDueDate,
  printDetails,
} from './utils/6-1.js';

export function printOwing(invoice) {
  printBanner();

  // calculate outstanding
  const { outstanding } = calculateOutstanding(invoice);

  // record due date
  recordDueDate(invoice);

  //print details
  printDetails(invoice, outstanding);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리',
};
printOwing(invoice);
