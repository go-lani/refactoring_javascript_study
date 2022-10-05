import { HeatingPlan, temperatureAlerts } from './11-4.js';

describe('11-4 Test', () => {
  let room;
  let plan;
  beforeEach(() => {
    room = {
      daysTempRange: {
        bottom: 0,
        top: 10,
      },
    };
    plan = new HeatingPlan({ low: 3, high: 10 });
  });

  it('case1', () => {
    expect(temperatureAlerts(room, plan)).toEqual([
      'room temperature went outside range',
    ]);
  });

  it('case2', () => {
    plan = new HeatingPlan({ low: 0, high: 10 });
    expect(temperatureAlerts(room, plan)).toEqual([]);
  });
});
