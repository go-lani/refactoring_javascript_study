import isObject from "lodash/isObject.js";
import isEmpty from "lodash/isEmpty.js";

export function price(order) {
  if (!isObject(order) || isEmpty(order)) {
    throw new Error("잘못된 값이 입력됬습니다");
  }

  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const deliveryCharge = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + deliveryCharge;
}
