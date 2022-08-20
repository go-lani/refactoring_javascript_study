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
        const baseRate = reading.getBaseRate(data.month, data.year);
        expect(baseRate).toBe(0.1);
    });
    it('should get baseRate(2)', () => {
        const baseRate = reading.getBaseRate(8, 2022);
        expect(baseRate).toBe(0.2);
    })
    it('should calculate baseCharge', () => {
        const baseCharge = reading.calculateBaseCharge(reading.getBaseRate(data.month, data.year));
        expect(baseCharge).toBe(1);
    });
    it('should get taxThreshold', () => {
        const taxThreshold = reading.getTaxThreshold();
        expect(taxThreshold).toBe(0.1);
    });
    it('should calculate taxableCharge', () => {
        const baseCharge = reading.calculateBaseCharge(reading.getBaseRate(data.month, data.year));
        const taxableCharge = reading.calculateTaxableCharge(baseCharge);
        expect(taxableCharge).toBe(0.9);
    })
})