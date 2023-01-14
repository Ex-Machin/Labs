var Heap = /** @class */ (function () {
    function Heap(data) {
        this.data = data;
    }
    Heap.prototype.extractMax = function () {
        throw new Error("Method not implemented.");
    };
    Heap.prototype.Change = function (i, x) {
        this.data[i] = x;
        this.heapifyUp(i);
        this.heapifyDown(i);
    };
    Heap.prototype.heapifyUp = function (i) {
        var _a;
        var current = i;
        while (current > 0) {
            var parent_1 = Math.floor((current - 1) / 2);
            if (this.data[current] < this.data[parent_1]) {
                _a = [this.data[parent_1], this.data[current]], this.data[current] = _a[0], this.data[parent_1] = _a[1];
                current = parent_1;
            }
            else {
                break;
            }
        }
    };
    Heap.prototype.heapifyDown = function (i) {
        var _a;
        var current = i;
        while (current < this.data.length) {
            var minIndex = current;
            var left = 2 * current + 1;
            var right = 2 * current + 2;
            if (left < this.data.length && this.data[left] < this.data[minIndex]) {
                minIndex = left;
            }
            if (right < this.data.length && this.data[right] < this.data[minIndex]) {
                minIndex = right;
            }
            if (minIndex !== current) {
                _a = [this.data[minIndex], this.data[current]], this.data[current] = _a[0], this.data[minIndex] = _a[1];
                current = minIndex;
            }
            else {
                break;
            }
        }
    };
    return Heap;
}());
var heap = new Heap([5, 3, 9, 8, 2, 1, 7]);
console.log(heap.data); // [5, 3, 9, 8, 2, 1, 7]
heap.Change(2, 1.5);
console.log(heap.data); // [1.5, 3, 5, 8, 2, 1, 7]
