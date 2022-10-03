import { HeatingPlan, temperatureAlerts } from './11-4';

describe('11-4.js', () => {
  let room;
  let plan;

  room = {
    name: 'Room',
    daysTempRange: {
      top: 10,
      bottom: 100,
    },
  };
  plan = new HeatingPlan({ low: 0, high: 10 });

  it('setWidth passed', () => {
    expect(temperatureAlerts(room, plan)).toStrictEqual([]);
  });

  it('setWidth passed', () => {
    plan = new HeatingPlan({ low: 1000, high: 5000 });

    expect(temperatureAlerts(room, plan)).toStrictEqual([
      'room temperature went outside range',
    ]);
  });
});
