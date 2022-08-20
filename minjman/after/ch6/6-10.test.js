import { jest } from '@jest/globals'
import _ from 'lodash';
import { enrichReading } from './6-10';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

describe('6-10 Test', () => {
    let result = null;
    beforeEach(() => {
        result = enrichReading(reading);
        _.cloneDeep = jest.fn().mockReturnValue(reading);
    });
    it('should get baseCharge', () => {
        expect(result.baseCharge).toBe(1);
    });
    it('should get baseRate(1)', () => {
        expect(result.baseRate).toBe(0.1);
    });
    it('should get baseRate(2)', () => {
        const readingTemp = { customer: 'ivan', quantity: 10, month: 8, year: 2022 };
        _.cloneDeep = jest.fn().mockReturnValue(readingTemp);
        result = enrichReading(readingTemp);
        expect(result.baseRate).toBe(0.2);
    });
})