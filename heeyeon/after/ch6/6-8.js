// export function readingsOutsideRange(station) {
//   console.log( station.readings.filter((r) => r.temp < station.temperatureFloor || r.temp > station.temperatureCeiling));

//   return station.readings.filter((r) => r.temp < station.temperatureFloor || r.temp > station.temperatureCeiling);
// }

// export const station = {
//   name: 'ZB1',
//   readings: [
//     { temp: 47, time: '2016-11-10 09:10' },
//     { temp: 53, time: '2016-11-10 09:20' },
//     { temp: 58, time: '2016-11-10 09:30' },
//     { temp: 53, time: '2016-11-10 09:40' },
//     { temp: 51, time: '2016-11-10 09:50' },
//   ],
//   temperatureFloor: 51,
//   temperatureCeiling: 53,
// };

// readingsOutsideRange(station);

//? class
export function readingsOutsideRange(station, range) {
  return station.readings.filter((r) => !range.contains(r.temp));
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

export class NumberRange {
  #min;
  #max;

  constructor(min, max){
    this.#min = min;
    this.#max = max;
  }

  get min() {
    return this.#min;
  }

  get max() {
    return this.#max;
  }

  contains(number) {
    return number>=this.#min && number <= this.#max;
  }
}

const range = new NumberRange(51,53);

const result = readingsOutsideRange(station, range);
console.log(result);



