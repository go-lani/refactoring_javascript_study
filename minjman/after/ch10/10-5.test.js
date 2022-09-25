import { Site, customerName } from './10-5';

describe('10-5 Test', () => {
  let site = null;
  beforeEach(() => {
    site = new Site('kim');
  });
  it('should return customer name', () => {
    expect(customerName(site)).toBe('kim');
  });
  it('should return occupant', () => {
    site = new Site('unknown');
    expect(customerName(site)).toBe('occupant');
  });
});
