const twoSum = require("../utils/twoSUm");

test("positive case", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("negative numbers", () => {
  expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
});

test("edge case", () => {
  expect(twoSum([1, 2, 3], 10)).toEqual([]);
});
