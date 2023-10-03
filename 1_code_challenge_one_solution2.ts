const switchAndRemove1 = (input: number[], S: number): number[] => {
  const result: number[] = [];

  for (let i = 0; i <= input.length - 1; i++) {
    for (let j = i; j < input.length; j++) {
      if (input[i] < input[j]) {
        const aux = input[i];
        input[i] = input[j];
        input[j] = aux;
      }
    }
  }

  for (let i = 0; i <= input.length - 1; i++) {
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

console.log(switchAndRemove1([1, 2, 3, 4, 5, 6], 6)); // [5, 4, 3, 2, 1]
console.log(switchAndRemove1([10, 20, 30, 40], 6)); // [40, 30, 20, 10]
console.log(switchAndRemove1([6], 6)); // []
console.log(switchAndRemove1([66], 6)); // []
console.log(switchAndRemove1([65], 6)); // []
console.log(switchAndRemove1([6, 2, 1], 6)); // [2, 1]
console.log(switchAndRemove1([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 6)); // [ 5, 4, 3, 2, 1 ]
