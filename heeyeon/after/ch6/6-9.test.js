import { Order } from "./6-3-2";
import { GetDefaultOwner } from './6-6';
import { AcquireReading } from './6-9';

describe("6-9.js", () => {
  const test =  {
    customer: 'ivan',
    quantity: 10,
    month: 5,
    year: 2017 
  }
  const reading = new AcquireReading(test);

  it("baseRate passed", () => {
    expect(reading.baseRate()).toBe(0.2);
  });
});
