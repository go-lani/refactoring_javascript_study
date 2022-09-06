import { Shipment } from './7-6';

describe('7-6 Test', () => {
    let shipment;
    beforeEach(() => {
        shipment = new Shipment(999, 'Maersk');
    });
    it('check valid trackingInfo', () => {
        expect(shipment.trackingInfo).toBe('Maersk: 999');
    });
    it('check valid shippingCompany', () => {
        expect(shipment.shippingCompany).toBe('Maersk');
    });
    it('check updated shippingCompany value', () => {
        shipment.shippingCompany = 'COSCO';
        expect(shipment.shippingCompany).toBe('COSCO');
    });
    it('check valid trackingNumber', () => {
        expect(shipment.trackingNumber).toBe(999);
    });
    it('check updated trackingNumber value', () => {
        shipment.trackingNumber = 1000;
        expect(shipment.trackingNumber).toBe(1000);
    });
})