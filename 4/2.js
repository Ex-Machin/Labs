var Heap2 = /** @class */ (function () {
    function Heap2(data) {
        this.data = data;
    }
    Heap2.prototype.Change = function (i, x) {
        this.data[i] = x;
        this.heapifyUp(i);
        this.heapifyDown(i);
    };
    Heap2.prototype.extractMin = function () {
        if (this.data.length === 0) {
            return undefined;
        }
        var min = this.data[0];
        this.data[0] = this.data.pop();
        this.heapifyDown(0);
        return min;
    };
    Heap2.prototype.heapifyUp = function (i) {
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
    Heap2.prototype.heapifyDown = function (i) {
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
    Heap2.prototype.findKthLargest = function (data, k) {
        // Build a min heap using the given data
        var heap = new Heap2(data);
        for (var i = Math.floor(data.length / 2); i >= 0; i--) {
            heap.heapifyDown(i);
        }
        // Extract the minimum element from the heap k times
        var kthLargest;
        for (var i = 0; i < k; i++) {
            kthLargest = heap.extractMin();
        }
        // Return the k-th largest element
        return kthLargest;
    };
    return Heap2;
}());
var heap2 = new Heap2([5, 3, 9, 8, 2, 1, 7]);
console.log(heap2.data); // [5, 3, 9, 8, 2, 1, 7]
console.log(heap2.findKthLargest(heap2.data, 2)); // [ 3, 7, 5, 8, 9 ]
