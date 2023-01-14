var Queue2 = /** @class */ (function () {
    function Queue2(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    Queue2.prototype.enqueue = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Queue has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    Queue2.prototype.dequeue = function () {
        return this.storage.shift();
    };
    Queue2.prototype.size = function () {
        return this.storage.length;
    };
    Queue2.prototype.last = function () {
        return this.storage[0];
    };
    Queue2.prototype.first = function () {
        //@ts-ignore
        return this.storage.at(-1);
    };
    Queue2.prototype.find = function (el) {
        return this.storage[el];
    };
    return Queue2;
}());
var queue2 = new Queue2();
queue2.enqueue("find me🤡");
queue2.enqueue("9/11");
queue2.enqueue("Buy World");
console.log(queue2);
console.log("Find me the element 2 ");
console.log(queue2.find(2));
