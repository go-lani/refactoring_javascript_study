export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

function reportLines(customer) {
  const result = [];
  result.push(["name", customer.name]);
  result.push(["location", customer.location]);
  return result;
}
