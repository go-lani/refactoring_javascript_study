import fs from 'fs';
import { jest } from '@jest/globals'
import { getOrdersLength } from './6-11-2';
import { getOrders } from './utils/6-11-2';

describe('6-11-2 Test', () => {
    let argv = [];
    beforeEach(() => {
        argv[2] = 'ch6/orders';
        fs.existsSync = jest.fn().mockReturnValue(true);
    });
    describe('[Success]', () => {
        it('should get orders', () => {
            const { orders } = getOrders(argv);
            expect(orders).toEqual([
                { id: 1, name: '우유', status: 'ready' },
                { id: 2, name: '사과', status: 'not-ready' },
                { id: 3, name: '바나나', status: 'ready' }
            ]);
        });
        it('should get all orders length', () => {
            const ordersLength = getOrdersLength(argv);
            expect(ordersLength).toBe(3);
        });
        it('should get orders length only status is "ready"', () => {
            argv[3] = '-r';
            const ordersLength = getOrdersLength(argv);
            expect(ordersLength).toBe(2);
        });
    });
});
