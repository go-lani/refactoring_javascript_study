import { enrichReading } from './6-10';
import { discount, priceOrder, shippingPerCase } from './6-11';

describe("6-11.js", () => {
  let product;
  let shippingMethod;

  beforeEach(() => {
    product = {
      basePrice: 10,
      discountRate: 0.1,
      discountThreshold: 10,
    };
    
    shippingMethod = {
      discountThreshold: 20,
      feePerCase: 5,
      discountedFee: 3,
    };    
  });

  it("priceOrder test", () => {
    expect(priceOrder(product,5)).toBe(65);
  });

  it("shippingPerCase test", () => {
    expect(shippingPerCase(product.basePrice, 5)).toBe(5);
  });
  
});


