import { acquireReading, enrichReading } from './6-10.js';

const aReading = acquireReading();

const result = enrichReading(aReading);
console.log(result.baseCharge);
