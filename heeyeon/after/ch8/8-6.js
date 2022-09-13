// 예제 1
// const pricingPlan = retrievePricingPlan();
// const chargePerUnit = pricingPlan.unit;
// const order = retreiveOrder();
// let charge;

const createResource = () => {
  let result = [];
  result.push('hi')
  return result;
}

// 예제 2
export function someFunc(availableResources) {
  let result = availableResources.length ? availableResources.pop() : createResource();
  // allocatedResources.push(result);
  
  return result;
}
