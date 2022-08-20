import { Range, readingsOutsideRange, station, operationPlan } from "./6-8";

describe('6-8 Test', () => {
    let range = null;
    let filterBy = null;
    beforeEach(() => {
        range = new Range(operationPlan.temperatureFloor, operationPlan.temperatureCeiling);
        filterBy = readingsOutsideRange({ station, range });
    })
    it('should filter reading data within range', () => {
        expect(filterBy).toEqual([
            { temp: 47, time: '2016-11-10 09:10' },
            { temp: 58, time: '2016-11-10 09:30' }
        ]);
    })
})