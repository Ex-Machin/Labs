type Pair2 = [string, string]; // zmieniono typ pola imię na string

function quickSort(arr: Pair2[]): Pair2[] {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left: Pair2[] = [];
  const right: Pair2[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i][1] < pivot[1] || (arr[i][1] === pivot[1] && arr[i][0] < pivot[0])) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const pairs2: Pair2[] = [['Alice', 'Smith'], ['Bob', 'Johnson'], ['Charlie', 'Smith']];
const sortedPairs2 = quickSort(pairs2);
console.log(sortedPairs2); // [ 'Bob', 'Johnson', [ 'Alice', 'Smith' ], 'Charlie', 'Smith' ]
