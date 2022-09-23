export function disabilityAmount(employee) {
  if (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  ) {
    return 0;
  }

  return 1;
}
