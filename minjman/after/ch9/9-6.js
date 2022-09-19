const STANDARD_GRAVITY = 9.81;

export function potentialEnergy(mass, height) {
  return mass * STANDARD_GRAVITY * height;
}
