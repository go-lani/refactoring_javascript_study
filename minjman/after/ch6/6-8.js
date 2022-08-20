export class Range {
    #min;
    #max;
    constructor(min, max) {
        this.#min = min;
        this.#max = max;
    }
    get min() {
        return this.#min;
    }

    get max() {
        return this.#max;
    }
}

export const station = {
  name: 'ZB1',
  readings: [
    { temp: 47, time: '2016-11-10 09:10' },
    { temp: 53, time: '2016-11-10 09:20' },
    { temp: 58, time: '2016-11-10 09:30' },
    { temp: 53, time: '2016-11-10 09:40' },
    { temp: 51, time: '2016-11-10 09:50' },
  ],
};

export const operationPlan = {
  temperatureFloor: 51,
  temperatureCeiling: 53,
};

const range = new Range(operationPlan.temperatureFloor, operationPlan.temperatureCeiling);

export function readingsOutsideRange({ station, range }) {
  return station.readings.filter((reading) => reading.temp < range.min || reading.temp > range.max);
}

// console.log(readingsOutsideRange({ station, range }));
