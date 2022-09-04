//? 명령어 - after 경로 내에서 명령어 입력해야함!
// node ch6/6-11-2.js ch6/orders -r
// ㄴ '-r' 은 optional

//! 스크립트 관련해서 코드를 짜게 될 경우, 크게 2가지 단계로 나누어 구현한다.
// 1. 사용자에게 입력을 받은 데이터를 유효성 검사
// 2. 필요한 로직 처리(어떤 로직이냐에 따라 또 세부적으로 단계가 나누어짐)

import fs from 'fs';

run(process.argv);

export function run(args) {
  const command = validateCommand(args);
  return countOrders(command);
}

function validateCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadyOnly = args.includes('-r');

  return {
    fileName,
    countReadyOnly
  };
};

function countOrders(command) {
  const { fileName, countReadyOnly } = command;
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const orderCount = countReadyOnly ? orders.filter(order => order.status === 'ready').length : orders.length;
  return orderCount;
}