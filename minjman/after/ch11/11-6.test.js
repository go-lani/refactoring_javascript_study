import { targetTemperature } from './11-6';

describe('11-6 Test', () => {
  let plan = null;
  let thermostat = null;
  beforeEach(() => {
    plan = 'plan';
    thermostat = {
      currentTemperature: 10,
    };
  });
  it('should return current temperature', () => {
    expect(targetTemperature(plan, thermostat.currentTemperature)).toBe(10);
  });
});
