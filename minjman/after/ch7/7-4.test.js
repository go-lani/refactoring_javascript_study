import { Order } from './7-4';

describe('7-4 Test', () => {
    let order = null;
    beforeEach(() => {
        order = new Order(10, { name: 'Cake', price: 1000 });
    });
    it('should return basePrice', () => {
        expect(order.basePrice).toBe(10000);
    });
    it('should return discountFactor with no discount when basePrice <= 1000', () => {
        order = new Order(10, { name: 'Cake', price: 90 });
        expect(order.discountFactor).toBe(0.98);
    });
    it('should return discountFactor with discount when basePrice > 1000', () => {
        expect(order.discountFactor).toBe(0.95);
    });
    it('should return price', () => {
        expect(order.price).toBe(9500);
    })
})