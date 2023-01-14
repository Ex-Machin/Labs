// interface IStack<T> {
//   unshift(item: T): void;
//   shift(): T | undefined;
//   peek(): T | undefined;
//   size(): number;
// }
// class Stack<T> implements IStack<T> {
//   private storage: T[] = [];
//   constructor(private capacity: number = Infinity) {}
//   unshift(item: T): void {
//     if (this.size() === this.capacity) {
//       throw Error("Stack has reached max capacity, you cannot add more items");
//     }
//     this.storage.unshift(item);
//   }
//   shift(): T | undefined {
//     return this.storage.shift();
//   }
//   peek(): T | undefined {
//     return this.storage[0];
//   }
//   size(): number {
//     return this.storage.length;
//   }
//   reverse(): T | undefined | void{  
//     if (this.size() > 0) {
//         const top = this.peek();
//         this.shift();
//         this.reverse();
//         this.storage.push(top);
//     }
//   }
// }
// const stack = new Stack<number>();
// stack.unshift(1);
// stack.unshift(2);
// stack.unshift(3);
// stack.unshift(4);
// console.log(stack);
// stack.reverse()
// console.log(stack);
