var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var minAmountChange = function (coins) {
    var sortedCoins = __spreadArray([], coins, true).sort(function (a, b) { return a - b; });
    var minChange = 1;
    for (var _i = 0, sortedCoins_1 = sortedCoins; _i < sortedCoins_1.length; _i++) {
        var coin = sortedCoins_1[_i];
        if (coin <= minChange) {
            minChange += coin;
        }
        else {
            break;
        }
    }
    return minChange;
};
console.log(minAmountChange([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(minAmountChange([1, 1, 1, 1, 1])); // 6
console.log(minAmountChange([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
