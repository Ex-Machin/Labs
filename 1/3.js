var Queue = /** @class */ (function () {
    function Queue(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Queue.prototype.enqueue = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Queue.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue.prototype.size = function () {
        return this.storage.length;
    };
    Queue.prototype.last = function () {
        return this.storage[0];
    };
    Queue.prototype.first = function () {
        //@ts-ignore
        return this.storage.at(-1);
    };
    return Queue;
}());
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue);
console.log(queue.last());
console.log(queue.first());
