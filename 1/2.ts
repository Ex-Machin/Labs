export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
  getStorage(): any;
  predefineStorege(items: any): void;
}

class StackA<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity: number = Infinity) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Stack has reached max capacity, you cannot add more items");
    }
    this.storage.push(item);
  }

  predefineStorege(items): void  {
    this.storage = items;
}

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }

  getStorage() { 
    return this.storage;
  }

  connect(stack: IStack<T>, to: IStack<T>): void {
    this.storage.push(...stack.getStorage())
    this.storage.sort((a:any, b: any)  => a - b);
    to.predefineStorege(this.getStorage());
  }
}

class StackB<T> extends StackA<T> implements IStack<T> {}
class StackC<T> extends StackA<T> implements IStack<T> {}

const instanceStackA = new StackA<number>();
const instanceStackB = new StackB<number>();
const instanceStackC = new StackC<number>();

instanceStackA.push(1);
instanceStackA.push(5);

instanceStackB.push(10);
instanceStackB.push(-1);

instanceStackA.connect(instanceStackB, instanceStackC);
console.log('instanceStackC', instanceStackC);

