export function isDeliveryFree(order) {
  return order.basePrice > 1000;
}

// console.log(isDeliveryFree({ basePrice: 1000 }));
