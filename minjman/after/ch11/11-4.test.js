import { temperatureAlerts, HeatingPlan } from './11-4';

describe('11-4 Test', () => {
  let room = null;
  let plan = null;
  beforeEach(() => {
    room = {
      daysTempRange: {
        low: 1,
        high: 10,
      },
    };
    plan = new HeatingPlan({ low: 1, high: 10 });
  });
  it('should return empty array', () => {
    expect(temperatureAlerts(room, plan)).toEqual([]);
  });
  it('should return alerts', () => {
    plan = new HeatingPlan({ low: 2, high: 11 });
    expect(temperatureAlerts(room, plan)).toEqual([
      'room temperature went outside range',
    ]);
  });
});
