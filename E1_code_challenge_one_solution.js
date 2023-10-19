function switchAndFilterExplained(arr, S) {
  // Create an empty array to store the filtered elements.
  const result = [];

  // Iterate through each element in the input array 'arr'.
  for (let i = 0; i < arr.length; i++) {
    // Convert the current number to a string to process its digits.
    const numString = arr[i].toString();
    let modifiedNum = ""; // Initialize an empty string to build the modified number.
    let foundNonS = false; // Initialize a flag to track if non-S digits were found.

    // Iterate through the digits of the current number.
    for (let j = 0; j < numString.length; j++) {
      const digit = numString[j];

      if (digit < S) {
        // If the current digit is less than S, include it in the modified number.
        modifiedNum += digit;
        foundNonS = true;
        console.log(`digit:${digit}, foundNonS:${foundNonS} i:${i}, j:${j}`);
      }
    }

    if (foundNonS) {
      // If at least one non-S digit was found, add the modified number to the result array.
      result.push(Number(modifiedNum));
    }
  }

  const noNativeReverse = (arr) => {
    const reversedResult = []
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedResult.push(arr[i]);
    }
    return reversedResult
  }
  // Reverse the order of elements in the 'result' array and return it.
  return noNativeReverse(result);
}

// console.log(switchAndFilterExplained([1, 2, 3, 4, 5, 6], 6)); // [5, 4, 3, 2, 1]
// console.log(switchAndFilterExplained([10, 20, 30, 40], 6)); // [40, 30, 20, 10]
// console.log(switchAndFilterExplained([6], 6)); // []
// console.log(switchAndFilterExplained([66], 6)); // []
// console.log(switchAndFilterExplained([65], 6)); // [5]
// console.log(switchAndFilterExplained([6, 2, 1], 6)); // [1, 2]
console.log(switchAndFilterExplained([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 6)); // [1, 2, 2, 3, 4, 5, 0]
