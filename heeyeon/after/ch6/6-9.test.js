import { AcquireReading } from './6-9';

describe("6-9.js", () => {
  const test =  {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017 
  }

  let reading;

  beforeEach(() => {
    reading = new AcquireReading(test);
  });

  it("baseRate passed", () => {
    expect(reading.baseRate()).toBe(0.2);
  });

  it("baseCharge passed", () => {
    expect(reading.baseCharge()).toBe(2);
  });

  it("taxThreshold passed", () => {
    expect(reading.taxThreshold()).toBe(0.1);
  });

  it("taxableCharge passed", () => {
    expect(reading.taxableCharge()).toBe(1.9);
  });

  it("customer passed", () => {
    expect(reading.customer).toBe('ivan');
  });

  it("quantity passed", () => {
    expect(reading.quantity).toBe(10);
  });

  it("month passed", () => {
    expect(reading.month).toBe(5);
  });

  it("year passed", () => {
    expect(reading.year).toBe(2017);
  });
});
