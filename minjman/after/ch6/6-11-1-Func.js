import { calculateBasePriceAndDiscount, calculatePrice } from './utils/6-11-1-Func.js';

export function priceOrder(product, quantity, shippingMethod) {
  const priceData = calculateBasePriceAndDiscount({ product, quantity });
  const { price } = calculatePrice({ priceData, shippingMethod, quantity });
  return price;
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
// console.log(price);