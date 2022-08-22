import { acquireReading } from './6-9.js';

const aReading = acquireReading();

const basicChargeAmount = aReading.baseCharge();
console.log(basicChargeAmount);