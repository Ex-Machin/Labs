class QueueElement {
  indexNumber: number;
  results: number[];
  priority: number;
  next: QueueElement | null;

  constructor(indexNumber: number, results: number[]) {
    this.indexNumber = indexNumber;
    this.results = results;
    this.priority = results.reduce((a, b) => a + b, 0);
    this.next = null;
  }
}

class PriorityQueue {
  head: QueueElement | null;

  enqueue(indexNumber: number, results: number[]): void {
    const newElement = new QueueElement(indexNumber, results);

    if (this.head === null || newElement.priority > this.head?.priority) {
      newElement.next = this.head;
      this.head = newElement;
      return;
    }

    let current = this.head;
    while (current?.next !== null && current?.next.priority > newElement.priority) {
      current = current?.next;
    }
    newElement.next = current?.next;
    if (current?.next){
      current.next = newElement;
    }
  }

  dequeue(): QueueElement | undefined {
    if (this.head === null) {
      return undefined;
    }

    const dequeuedElement = this.head;
    this.head = this.head.next;
    return dequeuedElement;
  }

  peek(): QueueElement | undefined {
    return this.head;
  }

  isEmpty(): boolean {
    return this.head === null;
  }
}

const queue = new PriorityQueue();
queue.enqueue(12345, [1, 2, 3, 1, 2, 3, 1]);
queue.enqueue(23456, [2, 3, 1, 2, 3, 1, 2]);
