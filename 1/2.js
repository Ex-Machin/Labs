var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StackA = /** @class */ (function () {
    function StackA(capacity) {
        if (capacity === void 0) { capacity = Infinity; }
        this.capacity = capacity;
        this.storage = [];
    }
    StackA.prototype.push = function (item) {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    };
    StackA.prototype.predefineStorege = function (items) {
        this.storage = items;
    };
    StackA.prototype.pop = function () {
        return this.storage.pop();
    };
    StackA.prototype.peek = function () {
        return this.storage[this.size() - 1];
    };
    StackA.prototype.size = function () {
        return this.storage.length;
    };
    StackA.prototype.getStorage = function () {
        return this.storage;
    };
    StackA.prototype.connect = function (stack, to) {
        var _a;
        (_a = this.storage).push.apply(_a, stack.getStorage());
        this.storage.sort(function (a, b) { return a - b; });
        to.predefineStorege(this.getStorage());
    };
    return StackA;
}());
var StackB = /** @class */ (function (_super) {
    __extends(StackB, _super);
    function StackB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StackB;
}(StackA));
var StackC = /** @class */ (function (_super) {
    __extends(StackC, _super);
    function StackC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StackC;
}(StackA));
var instanceStackA = new StackA();
var instanceStackB = new StackB();
var instanceStackC = new StackC();
instanceStackA.push(1);
instanceStackA.push(5);
instanceStackB.push(10);
instanceStackB.push(-1);
instanceStackA.connect(instanceStackB, instanceStackC);
console.log('instanceStackC', instanceStackC);
