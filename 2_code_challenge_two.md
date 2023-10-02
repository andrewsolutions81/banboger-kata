# 2. Code challenge two

Write a function that takes in a non-empty array of integers sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order. If the output number is out of the range [0, SS] (for S=6 the range will be [0, 66]), you will delete it of the output array. Please, don’t use built-in sort of your language.
Examples with S=6:
> {"array": [1, 2, 3, 5, 6, 8, 9]} -> [1, 4, 9, 25, 36, 64] > {"array": [-2, -1]} -> [1, 4]
> {"array": [-6, -5, 0, 5, 6]} -> [0, 25, 25, 36, 36]
> {"array": [-10, 10]} -> []
