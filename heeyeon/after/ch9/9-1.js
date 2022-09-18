// 예제 1
// const perimeter = 2 * (height + width);
// console.log(perimeter);
// const area = height * width;
// console.log(area);

// 예제 2
export function distanceTravelled(scenario, time) {
  let result;
  const acceleration = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  let primaryTime = Math.min(time, scenario.delay);
  result = 0.5 * acceleration * primaryTime * primaryTime; // 전파된 거리
  let secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    let primaryVelocity = acceleration * scenario.delay;
    let acc = (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;

    result +=
      primaryVelocity * secondaryTime +
      0.5 * acc * secondaryTime * secondaryTime;
  }

  return result;
}

console.log(
  'distanceTravelled',
  distanceTravelled(
    { primaryForce: 60, mass: 10, secondaryForce: 50, delay: 30 },
    50,
  ),
);

// 예제 3
export function discount(inputValue, quantity) {
  let result = inputValue;

  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;

  return result;
}

console.log('discount', discount(60, 150));
