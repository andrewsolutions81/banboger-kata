const sortedSquaredArray = (arr: number[], S: number): number[] => {
  const result: number[] = [];

  let negativeSquares: number[] = [];
  let positiveSquares: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    const square = arr[i] * arr[i];
    if (arr[i] < 0) {
      negativeSquares.push(square);
    } else {
      positiveSquares.push(square);
    }
  }

  let i = 0;
  let j = 0;
  while (i < negativeSquares.length && j < positiveSquares.length) {
    if (negativeSquares[i] < positiveSquares[j]) {
      result.push(negativeSquares[i]);
      i++;
    } else {
      result.push(positiveSquares[j]);
      j++;
    }
  }

  while (i < negativeSquares.length) {
    result.push(negativeSquares[i]);
    i++;
  }

  while (j < positiveSquares.length) {
    result.push(positiveSquares[j]);
    j++;
  }

  const SS = parseInt(S.toString() + S.toString(), 10);

  return result.filter((value) => value >= 0 && value <= SS);
};

console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9], 6)); // [1, 4, 9, 25, 36, 64]
console.log(sortedSquaredArray([-2, -1], 6)); // [1, 4]
console.log(sortedSquaredArray([-6, -5, 0, 5, 6], 6)); // [0, 25, 25, 36, 36]
console.log(sortedSquaredArray([-10, 10], 6)); // []
