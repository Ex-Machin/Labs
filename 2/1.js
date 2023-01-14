function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var result = [];
    var leftIndex = 0;
    var rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex][0] < right[rightIndex][0] ||
            (left[leftIndex][0] === right[rightIndex][0] && left[leftIndex][1] < right[rightIndex][1])) {
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
var pairs = [[1, 2], [3, 1], [2, 3]];
var sortedPairs = mergeSort(pairs);
console.log(sortedPairs); // [[1, 2], [
