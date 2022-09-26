import fs from 'fs';

if (!process.argv[2]) {
  throw new Error('파일 이름을 입력하세요');
}

class File {
  #name;
  constructor(name) {
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  get rawData() {
    return fs.readFileSync(this.name);
  }

  get orders() {
    return JSON.parse(this.rawData);
  }

  filteredOrdersLength(type) {
    return this.orders.filter(order => order.status === type).length;
  }
}

const file = new File(`./${process.argv[2]}.json`);

if (!fs.existsSync(file.name)) {
  throw new Error('파일이 존재하지 않습니다');
}

const rawData = file.rawData;
const orders = file.orders;

if (process.argv.includes('-r')) {
  console.log(file.filteredOrdersLength('ready'));
} else {
  console.log(orders.length);
}
