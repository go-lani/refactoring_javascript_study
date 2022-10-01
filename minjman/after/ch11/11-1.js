// 예제 1
export function getTotalOutstanding(customer) {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

export function sendBill(customer) {
  return `${customer.name}'s Bill`;
}

// 예제 2
export function alertForMiscreant(people) {
  const miscreant = findMiscreant(people);
  setOffAlarms(miscreant);
  return miscreant;
}

function findMiscreant(people) {
  for (const p of people) {
    if (p === 'Don') {
      return 'Don';
    }
    if (p === 'John') {
      return 'John';
    }
  }
  return '';
}

function setOffAlarms(person) {
  console.log(`Set off alarm ${person}`);
}
