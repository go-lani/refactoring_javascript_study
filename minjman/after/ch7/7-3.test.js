import { Order, Priority } from './7-3';

describe('7-3 Test', () => {
    let orders = [];
    beforeEach(() => {
        orders = [
            new Order(Priority.Normal),
            new Order(Priority.High),
            new Order(Priority.Rush),
        ];
    });
    it('should filter only high priority', () => {
        const highPriorityCount = orders.filter(order => order.isHighPriority()).length;
        expect(highPriorityCount).toBe(2);
    });
})