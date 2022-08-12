export function inNewEngland(customer) {
  const state = customer.address.state;
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(state);
}
