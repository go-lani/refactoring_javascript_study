export class OrderError extends Error {
  constructor(error) {
    super();
    this.error = error;
  }
}

export function localShippingRules(data) {
  if (data) return data;
  else throw new OrderError(-23);
}
