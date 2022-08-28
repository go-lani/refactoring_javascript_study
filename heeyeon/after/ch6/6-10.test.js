import { enrichReading } from './6-10';

describe("6-10.js", () => {
  const test =  {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017 
  }

  let reading;

  beforeEach(() => {
    reading = enrichReading(test);
  });

  it("baseRate passed", () => {
    expect(reading.baseRate).toBe(0.1);
  });

  it("baseCharge passed", () => {
    expect(reading.baseCharge).toBe(1);
  });
});
