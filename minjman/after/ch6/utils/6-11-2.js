import fs from 'fs';

export function getOrders(argv) {
  if (!argv || !argv[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  return { orders };
}