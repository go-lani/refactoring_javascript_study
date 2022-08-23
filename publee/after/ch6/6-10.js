import cloneDeep from "lodash/cloneDeep";

export function enrichReading(original) {
  const result = cloneDeep(original);
  const baseRate = result.year === 2017 && result.month === 5 ? 0.1 : 0.2;
  result.baseCharge = baseRate * result.quantity;
  return result;
}

const aReading = enrichReading({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});
