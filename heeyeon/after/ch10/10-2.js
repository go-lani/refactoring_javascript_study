export function disabilityAmount(employee) {
  const { seniority, monthsDisabled, isPartTime } = employee;
  if (seniority < 2 || monthsDisabled > 12 || isPartTime) return 0;

  return 1;
}
