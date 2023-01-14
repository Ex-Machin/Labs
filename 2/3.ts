function quickSort2(arr: string[]): string[] {
  if (arr.length <= 1) {
    return arr;
  }

  if (arr.length < 10) {
    return insertionSort(arr);
  }

  const pivot = arr[arr.length - 1];
  const left: string[] = [];
  const right: string[] = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort2(left).concat(pivot, quickSort2(right));
}

function insertionSort(arr: string[]): string[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
}

const arr = ['z', 'b', 'c', 'a', 'f', 'e', 'd', 'h', 'g', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'];
console.log(quickSort2(arr)); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const arr2 = ['123', 'abc', '456', 'def', '789', 'ghi'];
console.log(quickSort2(arr2)); // ['123', '456', '789', 'abc', 'def', 'ghi']
