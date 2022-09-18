// 예제 1
const width = 2;
const height = 2;
const perimeter = 2 * (height + width);
const ares = height * width;

// 예제 2
//! 추가한 녀석
function propagatedDistance(acceleration, time) {
  return 0.5 * acceleration * time ** 2;
}

//! 추가한 녀석
function acceleration(force, mass) {
  return force / mass;
}

export function distanceTravelled(scenario, time) {
  let result;
  const primaryAcceleration = acceleration(
    scenario.primaryForce,
    scenario.mass,
  ); // 가속도(a) = 힘(F) / 질량(m)
  const primaryTime = Math.min(time, scenario.delay);
  const secondaryTime = time - scenario.delay;

  result = propagatedDistance(primaryAcceleration, primaryTime); // 전파된 거리

  if (secondaryTime > 0) {
    // 두 번째 힘을 반영해 다시 계산
    const primaryVelocity = primaryAcceleration * scenario.delay;
    const secondaryAcceleration = acceleration(
      scenario.primaryForce + scenario.secondaryForce,
      scenario.mass,
    );

    result +=
      primaryVelocity * secondaryTime +
      propagatedDistance(secondaryAcceleration, secondaryTime);
  }

  return result;
}

// 예제 3
export function discount(inputValue, quantity) {
  let result = inputValue;
  if (inputValue > 50) result -= 2;
  if (quantity > 100) result -= 1;
  return result;
}
