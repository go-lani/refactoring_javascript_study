import { potentialEnergy } from './9-6.js';

describe('9-6 Test', () => {
  it('check valid get value', () => {
    const result = potentialEnergy(10, 5);
    expect(result).toBe(490.50000000000006);
  });
});
