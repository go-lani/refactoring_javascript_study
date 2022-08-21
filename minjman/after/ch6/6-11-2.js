//? 명령어 - after 경로 내에서 명령어 입력해야함!
// node ch6/6-11-2.js ch6/orders -r
// ㄴ '-r' 은 optional

import { getOrders } from './utils/6-11-2.js';

const isTest = process.env.NODE_ENV === 'test';

export const getOrdersLength = (argv) => {
  const { orders } = getOrders(argv);
  
  if (argv.includes('-r')) {
    return orders.filter((order) => order.status === 'ready').length
  } else {
    return orders.length;
  }
}

const { argv } = process;
if (isTest) {
  argv[2] = 'orders';
}
console.log('dsadsad')
const ordersLength = getOrdersLength(argv);
// console.log(ordersLength);
