import fs from 'fs';

checkedFile(process.argv[2]);

export function checkedFile (file) {
  if (!file) {
    throw new Error('파일 이름을 입력하세요');
  }
  
  const fileName = `./${file}.json`;
  
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);

  result(orders);
}

export function result (orders) {
  if (process.argv.includes('-r')) {
    // console.log(orders.filter((order) => order.status === 'ready').length);
    return orders.filter((order) => order.status === 'ready').length;
  }

  // console.log(orders.length);
  return orders.length;
};