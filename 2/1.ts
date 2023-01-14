type Pair = [number, number];

function mergeSort(arr: Pair[]): Pair[] {
  if (arr.length === 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left: Pair[], right: Pair[]): Pair[] {
  const result: Pair[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex][0] < right[rightIndex][0] || 
        (left[leftIndex][0] === right[rightIndex][0] && left[leftIndex][1] < right[rightIndex][1])) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const pairs: Pair[] = [[1, 2], [3, 1], [2, 3]];
const sortedPairs = mergeSort(pairs);
console.log(sortedPairs); // [[1, 2], [
