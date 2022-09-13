// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retreiveOrder();
let charge;

// 예제 2
function someFunc() {
  let result;
  if (availableResources.length === 0) {
    result = createResource();
  } else {
    result = availableResources.pop();
  }
  allocatedResources.push(result);
  return result;
}
