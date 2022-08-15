// 예제 1
export const rating = (driver) => Number(driver.numberOfLateDeliveries > 5) + 1;

// 예제 2
export const reportLines = (customer) => [
  ["name", customer.name],
  ["location", customer.location],
];
