import isObject from "lodash/isObject";
import isEmpty from "lodash/isEmpty";

export const rating = (driver) => {
  if (!isObject(driver) || typeof driver.numberOfLateDeliveries !== "number") {
    throw new Error("잘못된 값이 입력됬습니다");
  }
  return driver.numberOfLateDeliveries > 5 ? 2 : 1;
};

export const reportLines = (customer) => {
  if (!isObject(customer) || isEmpty(customer)) {
    throw new Error("잘못된 값이 입력됬습니다");
  }

  return [
    ["name", customer.name],
    ["location", customer.location],
  ];
};
