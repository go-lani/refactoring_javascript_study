export class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  isHighPriority() {
    return 'high' === this.priority || 'rush' === this.priority;
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter((o) => o.isHighPriority()).length;

console.log(highPriorityCount);