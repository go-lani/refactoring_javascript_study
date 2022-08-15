export function printCalculateofOutstanding(orders) {
  let outstanding = 0;

  for (const o of orders) {
    outstanding += o.amount;
  }

  return outstanding;
}

export function printDate() {
  return (invoice.dueDate = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + 30
  ).toLocaleDateString());
}

export function printOwing(invoice) {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");

  //print details
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${printCalculateofOutstanding(invoice.orders)}`);
  console.log(`due: ${printDate()}`);
  console.log(`invoice: ${JSON.stringify(invoice)}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
