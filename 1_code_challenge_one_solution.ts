function switchAndFilter(arr: number[], S: number): number[] {
  const toDelete: { [key: number]: boolean } = {};

  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i].toString();

    for (let j = 0; j < num.length; j++) {
      const digit = parseInt(num[j]);
      if (digit >= S) {
        toDelete[i] = true;
        break;
      }
    }
  }

  const result: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (!toDelete[i]) {
      result.unshift(arr[i]);
    }
  }

  return result;
}

console.log(switchAndFilter([1, 2, 3, 4, 5, 6], 6)); // [5, 4, 3, 2, 1]
console.log(switchAndFilter([10, 20, 30, 40], 6)); // [40, 30, 20, 10]
console.log(switchAndFilter([6], 6)); // []
console.log(switchAndFilter([66], 6)); // []
console.log(switchAndFilter([65], 6)); // [5]
console.log(switchAndFilter([6, 2, 1], 6)); // [1, 2]
console.log(switchAndFilter([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 6)); // [1, 2, 2, 3, 4, 5, 0] -> [ 1, 2, 3, 4, 5 ]
