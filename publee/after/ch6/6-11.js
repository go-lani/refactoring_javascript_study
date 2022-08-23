export function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculatePriceOrderData(product, quantity);
  return applyShipping(priceData, shippingMethod);
}

function calculatePriceOrderData(product, quantity) {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  return {
    basePrice,
    discount,
    quantity,
  };
}

function applyShipping(priceData, shippingMethod) {
  const shippingPerCase =
    priceData.price > shippingMethod.discountThreshold
      ? shippingMethod.discountedFee
      : shippingMethod.feePerCase;
  const shippingCost = priceData.quantity * shippingPerCase;
  return priceData.basePrice - priceData.discount + shippingCost;
}

// 사용 예:
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
