/*
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  //We are looking for the value that appears twice and the value that is not present in the array

  //Knowing this we can create a counter object to track the number of times a
  //value appears in the input array

  //We can then go through this counter to find the key that has a value of 2 and
  //parse it to be a number (since objects use strings for keys)

  //To find the missing value we can create a (correct) reference array and find what
  //value is present in it and not present in the input array

  //establish return array, reference array and counter object
  let dupeAndMissing = [];
  let reference = [];
  let counter = {};

  //populate reference array and counter
  for (let i = 0; i < nums.length; i++) {
    //add 1 -> nums.length to reference array
    reference.push(i + 1);

    //count number of times a value appears
    //if the counter already has the value increment
    if (counter[nums[i]]) {
      counter[nums[i]]++
      //else create the key and set it's value to one
    } else {
      counter[nums[i]] = 1;
    }
  }

  //iterate through the counter object and find the value that occured twice
  for (key in counter) {
    if (counter[key] === 2) {
      dupeAndMissing.push(parseInt(key));
    }
  }

  //iterate through the reference (correct) array
  for (let j = 0; j < reference.length; j++) {
    //if the input array does not have the current value in the correct array
    if (!nums.includes(reference[j])) {
      //push that value, since it is missing
      dupeAndMissing.push(reference[j]);
    }
  }

  //return the array housing the duplicate and the missing values
  return dupeAndMissing;
};