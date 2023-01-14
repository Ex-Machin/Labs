class Heap2 {
  public data: number[];

  constructor(data: number[]) {
    this.data = data;
  }

  private extractMin() {
    if (this.data.length === 0) {
      return undefined;
    }
    
    const min = this.data[0];
    this.data[0] = this.data.pop()!;
    this.heapifyDown(0);
    return min;
    
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
  findKthLargest(data: number[], k: number): number {
    const heap = new Heap2(data);
    for (let i = Math.floor(data.length / 2); i >= 0; i--) {
      heap.heapifyDown(i);
    }
    let kthLargest: number | undefined;
    for (let i = 0; i < k; i++) {
      kthLargest = heap.extractMin();
    }
    return kthLargest;
  }
}

const heap2 = new Heap2([5, 3, 9, 8, 2, 1, 7]);
console.log(heap2.data); // [5, 3, 9, 8, 2, 1, 7]


console.log(heap2.findKthLargest(heap2.data, 2)); // [ 3, 7, 5, 8, 9 ]
