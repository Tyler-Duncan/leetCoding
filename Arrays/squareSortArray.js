var sortedSquares = function(nums) {
  let output = [];

  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  for (let i=0; i < nums.length; i++) {
      if (Math.abs(nums[leftPointer]) >= Math.abs(nums[rightPointer])) {
          output.unshift(nums[leftPointer] ** 2);
          leftPointer += 1;
      } else {
          output.unshift(nums[rightPointer] ** 2);
          rightPointer -= 1;
          }
  }

  return output;
};