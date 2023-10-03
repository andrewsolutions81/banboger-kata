const minAmountChange = (coins: number[]): number => {
  const sortedCoins = [...coins].sort((a, b) => a - b);
  let minChange = 1;

  for (const coin of sortedCoins) {
    if (coin <= minChange) {
      minChange += coin;
    } else {
      break;
    }
  }

  return minChange;
};

console.log(minAmountChange([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(minAmountChange([1, 1, 1, 1, 1])); // 6
console.log(minAmountChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
