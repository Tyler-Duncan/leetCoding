/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
  //We are looking for the value that appears twice and the value that is not present in the array
  //Knowing this we can go through the array and add the duplicated value to the the answer we'll
  //be returning

  //And to find the value missing we can create a reference array and find what value is present
  //in it and not present in the input array

  //establish return array and counter
  let dupeAndMissing = [];
  let reference = [];
  let counter = {};

  //populate reference array and counter
  for (let i = 0; i < nums.length; i++) {
      //add 1 -> nums.length to reference array
      reference.push(i+1);

      //count number of times a value appears
      if (counter[nums[i]]) {
          counter[nums[i]]++
      } else {
          counter[nums[i]] = 1;
      }
  }

  //iterate through the object and find the value that occured twice
  for (key in counter) {
      if (counter[key] === 2) {
          dupeAndMissing.push(parseInt(key));
      }
  }

  //iterate through the reference (correct) array
  for (let j = 0; j < reference.length; j++) {
  //push the value that is missing from the input array
      if (!nums.includes(reference[j])) {
          dupeAndMissing.push(reference[j]);
      }
  }
  //return the answer array
  return dupeAndMissing;
};