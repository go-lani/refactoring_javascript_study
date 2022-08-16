import {
  printBanner,
  calculateResult,
  recordDueDate,
  printDetails,
} from "./utils/6-1.js";

export function printOwing(invoice) {
  printBanner();

  const { result } = calculateResult(invoice);

  recordDueDate(invoice);

  printDetails(invoice, result);
}

// const invoice = {
//   orders: [{ amount: 2 }, { amount: 5 }],
//   customer: '엘리',
// };
// printOwing(invoice);
