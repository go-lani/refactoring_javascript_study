export const printBanner = () => {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
};

export const calculateResult = (invoice) => {
  const result = invoice.orders.reduce((acc, cur) => acc + cur.amount, 0);
  return { result };
};

export const recordDueDate = (invoice) => {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

export const printDetails = (invoice, result) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${result}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};
