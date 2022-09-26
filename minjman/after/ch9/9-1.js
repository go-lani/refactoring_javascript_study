// 예제 1
export function getArea(height, width) {
  const perimeter = 2 * (height + width);
  const area = height * width;
  return { perimeter, area };
}

// 예제 2
export function distanceTravelled(scenario, time) {
  const primaryAcc = scenario.primaryForce / scenario.mass; // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.min(time, scenario.delay);

  let result = 0.5 * primaryAcc * primaryTime * primaryTime; // 전파된 거리

  const secondaryTime = time - scenario.delay;
  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcc * scenario.delay;
    const secondaryAcc =
      (scenario.primaryForce + scenario.secondaryForce) / scenario.mass;
    result +=
      primaryVelocity * secondaryTime +
      0.5 * secondaryAcc * secondaryTime * secondaryTime;
  }

  return result;
}

// console.log(
//   distanceTravelled(
//     {
//       primaryForce: 2,
//       mass: 3,
//       delay: 4,
//       secondaryForce: 5,
//     },
//     5,
//   ),
// );

// 예제 3
export function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
