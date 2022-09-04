import Order from './7-4';
import { TrackingInformation } from './7-6';

describe("7-6.js", () => {
  let shipment;

  beforeEach(() => {
    shipment = new TrackingInformation(999, 'Maersk');
  });

  it("shippingCompany passed", () => {
    expect(shipment.shippingCompany).toBe('Maersk');
  });

  it("set shippingCompany passed", () => {
    shipment.shippingCompany = 'COSCO';
    expect(shipment.shippingCompany).toBe("COSCO");
  });

  it("trackingNumber passed", () => {
    expect(shipment.trackingNumber).toBe(999);
  });

  it("set trackingNumber passed", () => {
    shipment.trackingNumber = 500;
    expect(shipment.trackingNumber).toBe(500);
  });

  it("trackingInfo passed", () => {
    expect(shipment.trackingInfo).toBe("Maersk: 999");
  });
});
