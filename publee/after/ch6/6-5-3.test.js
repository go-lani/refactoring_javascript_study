import { isCustomerAddressIncludedInNewEngland } from "./6-5-3.js";

describe("6-5-3 Test", () => {
  let customer;
  beforeEach(() => {
    customer = {
      address: {
        state: "CT",
      },
    };
  });

  it("고객의 주소지가 new england에 포함될 경우 true를 반환한다.", () => {
    expect(isCustomerAddressIncludedInNewEngland(customer)).toBe(true);
  });

  it("고객의 주소지가 new england에 포함되지 않을 경우 false를 반환한다.", () => {
    expect(
      isCustomerAddressIncludedInNewEngland({
        address: {
          state: "AB",
        },
      })
    ).toBe(false);
  });
});
