import { Price } from './6-11-1-Class';
import { priceOrder } from './6-11-1-Func';
import { calculateBasePriceAndDiscount, calculatePrice } from './utils/6-11-1-Func';

describe('6-11-1 Test', () => {
    let product = null;
    let shippingMethod = null;
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
    describe('6-11-1-Class version', () => {
        let price = null;
        beforeEach(() => {
            price = new Price(product, 5, shippingMethod);
        })
        it('should get basePrice', () => {
            expect(price.basePrice).toBe(50);
        });
        it('should get discount', () => {
            expect(price.discount).toBe(0);
        });
        it('should get shippingPerCase(1)', () => {
            expect(price.shippingPerCase).toBe(shippingMethod.discountedFee);
        });
        it('should get shippingPerCase(2)', () => {
            shippingMethod.discountThreshold = 60;
            expect(price.shippingPerCase).toBe(shippingMethod.feePerCase);
        });
        it('should get shippingCost', () => {
            expect(price.shippingCost).toBe(15);
        });
        it('should get price', () => {
            expect(price.price).toBe(65);
        });
    })
    describe('6-11-1-Func version', () => {
        let priceData = null;
        beforeEach(() => {
            priceData = calculateBasePriceAndDiscount({product, quantity: 5, shippingMethod});
        })
        it('should calculate basePrice and discount in calculateBasePriceAndDiscount', () => {
            expect(priceData).toEqual({ basePrice: 50, discount: 0 });
        });
        it('should calculate price in calculatePrice(1)', () => {
            const { price } = calculatePrice({ priceData, shippingMethod, quantity: 5 });
            expect(price).toBe(65);
        });
        it('should calculate price in calculatePrice(2)', () => {
            shippingMethod.discountThreshold = 60;
            priceData = calculateBasePriceAndDiscount({product, quantity: 5, shippingMethod});
            const { price } = calculatePrice({ priceData, shippingMethod, quantity: 5 });
            expect(price).toBe(75);
        });
        it('should return price', () => {
            expect(priceOrder(product, 5, shippingMethod)).toBe(65);
        })
    });
});