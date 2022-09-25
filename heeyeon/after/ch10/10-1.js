export function calculateCharge({ date, quantity, plan }) {
  if (isSummer({ date, plan })) {
    return quantity * plan.summerRate;
  }

  return quantity * plan.regularRate + plan.regularServiceCharge;
}

export function isSummer({ date, plan }) {
  return !date.isBefore(plan.summerStart) && !date.isAfter(plan.summerEnd);
}
