export function isCustomerAddressIncludedInNewEngland(customer) {
  const newEngland = ["MA", "CT", "ME", "VT", "NH", "RI"];
  return newEngland.includes(customer.address.state);
}

// is the customer's address included in New England
