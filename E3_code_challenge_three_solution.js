// Function definition that takes an array of coins
const minAmountChangeExplained = (coins) => {
  // Sort the array of coins in ascending order
  const sortedCoins = [...coins].sort((a, b) => a - b);
  console.log("sorted coins: ", sortedCoins);

  // Initialize the minimum change amount to 1
  let minChange = 1;

  // Iterate through the sorted coins
  for (const coin of sortedCoins) {
    // If the value of the current coin is less than or equal to the minimum change amount
    if (coin <= minChange) {
      // Update the minimum change amount by adding the value of the current coin
      minChange += coin;
    } else {
      // If the current coin is greater than the minimum change amount, exit the loop
      break;
    }
    console.log(`Coin: ${coin}, Current minChange: ${minChange}`);
  }

  // Return the minimum change amount that cannot be given
  return minChange;
};

// console.log(minAmountChangeExplained([5, 7, 1, 1, 2, 3, 22])); // 20
// console.log(minAmountChangeExplained([1, 1, 1, 1, 1])); // 6
console.log(minAmountChangeExplained([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
