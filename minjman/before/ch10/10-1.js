function calculateCharge(date, quantity, plan) {
  let charge = 0;
  if (!date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd))
    charge = quantity * plan.summerRate;
  else charge = quantity * plan.regularRate + plan.regularServiceCharge;
  return charge;
}

const date = {
  isBefore: date => date <= new Date(),
  isAfter: date => date >= new Date(),
};
const plan = {
  summerStart: new Date('2022-06-01'),
  summerEnd: new Date('2022-08-31'),
  summerRate: 5,
  regularRate: 10,
  regularServiceCharge: 100,
};
const quantity = 10;

console.log(calculateCharge(date, quantity, plan));
