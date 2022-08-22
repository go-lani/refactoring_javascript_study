export function discount (quantity) {
  return Math.max(quantity - product.discountThreshold, 0) * product.basePrice * product.discountRate;
}

export function shippingPerCase (basePrice) {
  return basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;
}

export function shippingCost (basePrice, quantity) {
  return quantity * shippingPerCase(basePrice);
}

export function priceOrder(product, quantity) {
  const basePrice = product.basePrice * quantity;

  return basePrice - discount(quantity) + shippingCost(basePrice, quantity);
}

const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
