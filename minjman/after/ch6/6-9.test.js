import { Reading } from './6-9';

const data = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

describe('6-9 Test', () => {
    let reading = null;
    beforeEach(() => {
        reading = new Reading(data);
    });
    it('should return customer', () => {
        expect(reading.customer).toBe(data.customer);
    });
    it('should return quantity', () => {
        expect(reading.quantity).toBe(data.quantity);
    });
    it('should return month', () => {
        expect(reading.month).toBe(data.month);
    });
    it('should return year', () => {
        expect(reading.year).toBe(data.year);
    });
    it('should get baseRate(1)', () => {
        const baseRate = reading.baseRate;
        expect(baseRate).toBe(0.1);
    });
    it('should get baseRate(2)', () => {
        const reading = new Reading({ customer: 'ivan', quantity: 10, month: 8, year: 2022 })
        const baseRate = reading.baseRate;
        expect(baseRate).toBe(0.2);
    })
    it('should get baseCharge', () => {
        const baseCharge = reading.baseCharge;
        expect(baseCharge).toBe(1);
    });
    it('should get taxThreshold', () => {
        const taxThreshold = reading.taxThreshold;
        expect(taxThreshold).toBe(0.1);
    });
    it('should calculate taxableCharge', () => {
        const taxableCharge = reading.taxableCharge;
        expect(taxableCharge).toBe(0.9);
    })
})