// 예제 1
export function getTotalOutstanding(invoices) {
  return invoices.reduce((total, each) => each.amount + total, 0);
}

export function sendBill(customer) {
  return `${customer.name}이(가) 지불할 금액은 총 ${getTotalOutstanding(
    customer.invoices,
  )}입니다`;
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

export function findMiscreant(people) {
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

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}
