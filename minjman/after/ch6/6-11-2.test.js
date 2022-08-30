import fs from 'fs';
import { jest } from '@jest/globals'
import { run } from './6-11-2';

describe('6-11-2 Test', () => {
    let argv = [];
    beforeEach(() => {
        argv[2] = 'ch6/orders';
        fs.existsSync = jest.fn().mockReturnValue(true);
    });
    describe('[Success]', () => {
        it('should get orders', () => {
            const orderCount = run(argv);
            expect(orderCount).toBe(3);
        });
    });
});
