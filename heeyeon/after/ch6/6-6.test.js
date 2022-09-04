import { GetDefaultOwner } from './6-6';

describe("6-6.js", () => {
  const order = new GetDefaultOwner('마틴', '파울러');

  it("firstName passed", () => {
    expect(order.firstName).toBe('마틴');
  });

  it("lastName passed", () => {
    expect(order.lastName).toBe('파울러');
  });

});
