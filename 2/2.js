function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i][1] < pivot[1] || (arr[i][1] === pivot[1] && arr[i][0] < pivot[0])) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
var pairs2 = [['Alice', 'Smith'], ['Bob', 'Johnson'], ['Charlie', 'Smith']];
var sortedPairs2 = quickSort(pairs2);
console.log(sortedPairs2); // [['Charlie', 'Smith'], ['Alice', 'Smith'], ['Bob', 'Johnson']]
