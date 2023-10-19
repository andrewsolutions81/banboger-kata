const countingSort = (arr) => {
  // Find the maximum value in the array
  let max = Math.max(...arr);

  // Create a counting array with a size equal to the maximum value + 1
  let count = new Array(max + 1).fill(0);

  // Fill the counting array with the frequency of each element
  for (let num of arr) {
    count[num]++;
  }

  // Reconstruct the sorted array
  let sortedArr = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }

  return sortedArr;
}

const sortedSquaredArrayExplained = (arr, S) => {
const result = [];
const squareArr = [];
const SS = Number(S.toString() + S.toString());
console.log("SS: (number) ", SS);

for (let i = 0; i < arr.length; i++) {
  const squareNumber = arr[i] * arr[i];
  squareArr.push(squareNumber);
}
console.log("squareArr: ", squareArr);

// Sort using counting sort in this case, or quicksort, or the native .sort method, but this is O(n)
const sortedDoubleNums = countingSort(squareArr);
console.log("sortedDoubleNums: ", sortedDoubleNums);

// Iterate through it and add the numbers to the results AS LONG as they are less than SS (twice S, not S+S)
for (let i = 0; i < sortedDoubleNums.length; i++) {
  const element = sortedDoubleNums[i];
  if (element < SS) {
    result.push(element);
  }
}

return result;
};

// console.log(sortedSquaredArrayExplained([1, 2, 3, 5, 6, 8, 9], 6));  // [1, 4, 9, 25, 36, 64]
// console.log(sortedSquaredArrayExplained([-2, -1], 6));  // [1, 4]
// console.log(sortedSquaredArrayExplained([-6, -5, 0, 5, 6], 6));  // [0, 25, 25, 36, 36]
console.log(sortedSquaredArrayExplained([-9, -8, -6, -5, 0, 5, 6], 6));  // [0, 25, 25, 36, 36]
// console.log(sortedSquaredArrayExplained([-10, 10], 6));  // []
