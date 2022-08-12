export function isDeliveryFree(anOrder) {
  let basePrice = anOrder.basePrice;
  return basePrice > 1000;
}

console.log(isDeliveryFree({ basePrice: 1000 }));
