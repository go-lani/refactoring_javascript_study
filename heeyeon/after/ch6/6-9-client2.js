import { acquireReading } from './6-9.js';

const aReading = acquireReading();

export const taxableCharge = aReading.taxableCharge();
console.log(taxableCharge);