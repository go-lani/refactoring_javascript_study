import { Range, readingsOutsideRange, station, temperatureRange } from './6-8';

describe('6-8 Test', () => {
    let range = null;
    let filterBy = null;
    beforeEach(() => {
        range = new Range(temperatureRange.min, temperatureRange.max);
        filterBy = readingsOutsideRange({ readings: station.readings, range });
    })
    it('should return min temperature', () => {
        expect(range.min).toBe(temperatureRange.min);
    })
    it('should return max temperature', () => {
        expect(range.max).toBe(temperatureRange.max);
    })
    it('should filter reading data outside of range', () => {
        expect(filterBy).toEqual([
            { temp: 47, time: '2016-11-10 09:10' },
            { temp: 58, time: '2016-11-10 09:30' }
        ]);
    })
})