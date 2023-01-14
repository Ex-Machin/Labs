class Heap {
  public data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  Change(i: number, x: number): void {
    this.data[i] = x;
    this.heapifyUp(i);
    this.heapifyDown(i);
  }

  private heapifyUp(i: number): void {
    let current = i;
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      if (this.data[current] < this.data[parent]) {
        [this.data[current], this.data[parent]] = [this.data[parent], this.data[current]];
        current = parent;
      } else {
        break;
      }
    }
  }

  private heapifyDown(i: number): void {
    let current = i;
    while (current < this.data.length) {
      let minIndex = current;
      const left = 2 * current + 1;
      const right = 2 * current + 2;
      if (left < this.data.length && this.data[left] < this.data[minIndex]) {
        minIndex = left;
      }
      if (right < this.data.length && this.data[right] < this.data[minIndex]) {
        minIndex = right;
      }
      if (minIndex !== current) {
        [this.data[current], this.data[minIndex]] = [this.data[minIndex], this.data[current]];
        current = minIndex;
      } else {
        break;
      }
    }
  }
}

const heap = new Heap([5, 3, 9, 8, 2, 1, 7]);
console.log(heap.data); // [5, 3, 9, 8, 2, 1, 7]

heap.Change(2, 1.5);
console.log(heap.data); // [1.5, 3, 1, 8,2, 5, 7]
