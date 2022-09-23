const isSummer = (date, plan) => {
  return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
};

export function calculateCharge(date, quantity, plan) {
  const charge = isSummer(date, plan)
    ? quantity * plan.summerRate
    : quantity * plan.regularRate + plan.regularServiceCharge;

  return charge;
}

// ----------------------------------------------------------------

// const date = {
//   isBefore: date => date <= new Date(),
//   isAfter: date => date >= new Date(),
// };
// const plan = {
//   summerStart: new Date('2022-06-01'),
//   summerEnd: new Date('2022-08-31'),
//   summerRate: 5,
//   regularRate: 10,
//   regularServiceCharge: 100,
// };
// const quantity = 10;

// console.log(calculateCharge(date, quantity, plan));
