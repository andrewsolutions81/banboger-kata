const switchAndRemove2 = (input: number[], S: number): number[] => {
  const result: number[] = [];

  for (let i = input.length - 1; i >= 0; i--) {
    let number = input[i];
    let hasLargeDigit = false;

    while (number > 0) {
      const digit = number % 10;
      if (digit >= S) {
        hasLargeDigit = true;
        break;
      }
      number = Math.floor(number / 10);
    }

    if (!hasLargeDigit) {
      result.push(input[i]);
    }
  }

  return result;
};

console.log(switchAndRemove2([1, 2, 3, 4, 5, 6], 6)); // [5, 4, 3, 2, 1]
console.log(switchAndRemove2([10, 20, 30, 40], 6)); // [40, 30, 20, 10]
console.log(switchAndRemove2([6], 6)); // []
console.log(switchAndRemove2([66], 6)); // []
console.log(switchAndRemove2([65], 6)); // []
console.log(switchAndRemove2([6, 2, 1], 6)); // [2, 1]
console.log(switchAndRemove2([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 6)); // [ 5, 4, 3, 2, 1 ]
