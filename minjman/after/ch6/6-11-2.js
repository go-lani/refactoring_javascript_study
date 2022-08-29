//? 명령어 - after 경로 내에서 명령어 입력해야함!
// node ch6/6-11-2.js ch6/orders -r
// ㄴ '-r' 은 optional

import { getOrders } from './utils/6-11-2.js';

export const getOrdersLength = (argv) => {
  const { orders } = getOrders(argv);
  const filtered = argv.includes('-r') ? orders.filter((order) => order.status === 'ready') : orders;
  return filtered.length;
}

const isTest = process.env.NODE_ENV === 'test';
const { argv } = process;

if (isTest) {
  argv[2] = 'ch6/orders';
}

const ordersLength = getOrdersLength(argv);
// console.log(ordersLength);
