// 예제 1
export function calc(person, percent) {
  return person.salary * percent;
  // return (person.salary = person.salary.multiply(percent));
}

// 예제 2
export function baseCharge(usage) {
  if (usage < 0) return usd(0);

  const amount =
    mixBand(usage, 0, 100) * 0.03 +
    mixBand(usage, 100, 200) * 0.05 +
    mixBand(usage, 200, Infinity) * 0.07;

  return usd(amount);
}

function mixBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}

function usd(value) {
  return {
    currency: '$',
    currencyName: 'USD',
    value: value,
  };
}
