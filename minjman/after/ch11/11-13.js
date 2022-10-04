const values = [];
export function getValueForPeriod(periodNumber, values) {
  return periodNumber < 0 || periodNumber >= values.length
    ? 0
    : values[periodNumber];
}

// getValueForPeriod(-10, values);
