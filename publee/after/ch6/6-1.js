import isEmpty from "lodash/isEmpty";
import isObject from "lodash/isObject";

export function printOwing(invoice) {
  if (!isObject(invoice) || isEmpty(invoice)) {
    throw new Error("잘못된 값이 입력됬습니다");
  }
  const totalAmount = () =>
    invoice.orders.reduce((pre, cur) => pre + cur.amount, 0);

  const recordDueDate = () => {
    const today = new Date();
    invoice.dueDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() + 30
    ).toLocaleDateString();

    return invoice.dueDate;
  };

  const printDetails = () => {
    console.log("***********************");
    console.log("**** Customer Owes ****");
    console.log("***********************");
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${totalAmount()}`);
    console.log(`due: ${recordDueDate()}`);
  };

  printDetails();
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
