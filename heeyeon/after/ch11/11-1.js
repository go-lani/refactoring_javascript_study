// 예제 1
export function totalOutstanding(customer) {
  const result = customer.invoices.reduce(
    (total, each) => each.amount + total,
    0,
  );
  console.log(result);
  return result;
}

const test = {
  test: 'test',
  invoices: [
    {
      amount: 10,
    },
    {
      amount: 15,
    },
  ],
};

function sendBill() {
  // return sendBill;
}

totalOutstanding(test);

// 예제 2
export function alertForMiscreant(people) {
  const test = findPerson(people);
  return setOffAlarms(test);
}

export function findPerson(people) {
  const person = people.find(p => p === 'John' || p === 'Don');
  if (!person) return '';

  return person === 'John' ? 'John' : 'Don';
}

function setOffAlarms(p) {
  console.log('Found Miscreant ' + p);
  return 'Found Miscreant ' + p;
}

alertForMiscreant(['Con', 'John', 'Don', 'll']);
