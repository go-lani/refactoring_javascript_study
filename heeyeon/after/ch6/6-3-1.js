export function price(order) {
  // 가격(price) = 기본가격 - 수량할인 + 배송비

  const originPrice = order.quantity * order.itemPrice;
  const discountCost =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const deliveryCharge = Math.min(originPrice * 0.1, 100);

  return originPrice - discountCost + deliveryCharge;
}
