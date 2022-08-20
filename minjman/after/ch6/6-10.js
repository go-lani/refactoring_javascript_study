//! 6-10 여러 함수를 변환 함수로 묶기 방법보다, 6-9 클래스로 묶기 방법을 더 선호함
//! => 객체지향의 캡슐화 장점을 적극 활용하는 것이 더 좋다!

import _ from 'lodash';

const reading = { customer: 'ivan', quantity: 10, month: 5, year: 2017 };

export function enrichReading(original) {
  const clone = _.cloneDeep(original);
  const baseRate = clone.year === 2017 && clone.month === 5 ? 0.1 : 0.2;
  const baseCharge = baseRate * clone.quantity;
  const result = {
    ...clone,
    baseRate,
    baseCharge
  }
  return result;
}

const result = enrichReading(reading);

//TODO client1 
// console.log(result.baseCharge);
