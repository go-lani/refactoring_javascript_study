// 예제 1
export function rating(driver) {
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
}

// 예제 2
export function reportLines(customer) {
  const lines = [];
  lines.push(['name', customer.name]);
  lines.push(['location', customer.location]);
  return lines;
}

// console.log(rating({ numberOfLateDeliveries: 5 }));
// console.log(reportLines({ name: 'Kim', location: 'Seoul' }));
