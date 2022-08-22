import { Order } from "./6-3-2";
import { GetDefaultOwner } from './6-6';

describe("6-6.js", () => {
  const test =  { firstName: '마틴', lastName: '파울러' };
  const order = new GetDefaultOwner(test);

  it("firstName passed", () => {
    expect(order.firstName).toBe('마틴');
  });

  it("lastName passed", () => {
    expect(order.lastName).toBe('파울러');
  });

});
