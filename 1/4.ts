interface IQueue2<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    size(): number;
}

class Queue2<T> implements IQueue2<T> {
    private storage: T[] = [];
  
    constructor(private capacity: number = Infinity) {}
  
    enqueue(item: T): void {
      if (this.size() === this.capacity) {
        throw Error("Queue has reached max capacity, you cannot add more items");
      }
      this.storage.push(item);
    }
    dequeue(): T | undefined {
      return this.storage.shift();
    }
    size(): number {
      return this.storage.length;
    }
    last(): T {
        return this.storage[0]
    }
    first(): T {
        //@ts-ignore
        return this.storage.at(-1)
    }
    find(el: number) {
        return this.storage[el]
    }
  }
  
const queue2 = new Queue2<string>();

queue2.enqueue("find me🤡");
queue2.enqueue("9/11");
queue2.enqueue("Buy World");

console.log(queue2);

console.log("Find me the element 2 ");
console.log(queue2.find(2));







