var QueueElement = /** @class */ (function () {
    function QueueElement(indexNumber, results) {
        this.indexNumber = indexNumber;
        this.results = results;
        this.priority = results.reduce(function (a, b) { return a + b; }, 0);
        this.next = null;
    }
    return QueueElement;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
    }
    PriorityQueue.prototype.enqueue = function (indexNumber, results) {
        var _a;
        var newElement = new QueueElement(indexNumber, results);
        if (this.head === null || newElement.priority > ((_a = this.head) === null || _a === void 0 ? void 0 : _a.priority)) {
            newElement.next = this.head;
            this.head = newElement;
            return;
        }
        var current = this.head;
        while ((current === null || current === void 0 ? void 0 : current.next) !== null && (current === null || current === void 0 ? void 0 : current.next.priority) > newElement.priority) {
            current = current === null || current === void 0 ? void 0 : current.next;
        }
        newElement.next = current === null || current === void 0 ? void 0 : current.next;
        if (current === null || current === void 0 ? void 0 : current.next) {
            current.next = newElement;
        }
    };
    PriorityQueue.prototype.dequeue = function () {
        if (this.head === null) {
            return undefined;
        }
        var dequeuedElement = this.head;
        this.head = this.head.next;
        return dequeuedElement;
    };
    PriorityQueue.prototype.peek = function () {
        return this.head;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.head === null;
    };
    return PriorityQueue;
}());
var queue = new PriorityQueue();
queue.enqueue(12345, [1, 2, 3, 1, 2, 3, 1]);
queue.enqueue(23456, [2, 3, 1, 2, 3, 1, 2]);
console.log(queue.head);
