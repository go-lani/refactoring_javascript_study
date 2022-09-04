import { Shipment } from './7-6';

describe('7-6 Test', () => {
    let shipment = null;
    beforeEach(() => {
        shipment = new Shipment(999, 'Maersk');
    });
    it('should return trackingInfo', () => {
        expect(shipment.trackingInfo).toBe('Maersk: 999');
    });
    it('should return shippingCompany', () => {
        expect(shipment.shippingCompany).toBe('Maersk');
    });
    it('should update shippingCompany', () => {
        shipment.shippingCompany = 'COSCO';
        expect(shipment.shippingCompany).toBe('COSCO');
    });
    it('should return trackingNumber', () => {
        expect(shipment.trackingNumber).toBe(999);
    });
    it('should update trackingNumber', () => {
        shipment.trackingNumber = 1000;
        expect(shipment.trackingNumber).toBe(1000);
    });
})