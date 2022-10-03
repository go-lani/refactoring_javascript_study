export function calculateCharge(date, quantity, plan) {
  return isSummer(date, plan)
    ? quantity * rateFromType('summer', plan)
    : quantity * rateFromType('regular', plan);
}

function isSummer(date, plan) {
  return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
}

function rateFromType(type, plan) {
  return type === 'summer'
    ? plan.summerRate
    : plan.regularRate + plan.regularServiceCharge;
}
