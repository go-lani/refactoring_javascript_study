import { isIncludeState } from './8-5.js';

describe('8-5 Test', () => {
  let states;
  let status;
  beforeEach(() => {
    states = ['MA'];
    status = false;
  });
  it('check valid value', () => {
    expect(status).toBe(false);
    status = isIncludeState(states);
    expect(status).toBe(true);
  });
});
