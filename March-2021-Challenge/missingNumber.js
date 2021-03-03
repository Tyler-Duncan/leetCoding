// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

/*
Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.

Example 4:
Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
*/

/* ---High Level--- */

//For starters, we know that 'n' is equal to the number of items (aka length) in our array, and we're missing a number between 0 and n.
//If we want to keep to the constraint/follow up note about space complexity we need to make sure only a single variable is defined
//This will likely be what we return in the end
//for time complexity we want to keep it at O(n), so there should be no nested equations performed, luckily if we iterate through the array twice we can
//acheive O(2n) which is ultimately O(n) since we ignore constants when determining time complexity


//We can start by establish our return variable and setting it to the sum of the input array
//then by iterating through the array we can continually subtract from our sum/return variable until we reach the number that is missing

/* ---Solution/Work Start--- */

//Establish return variable
  //set it to the sum of the input array using the reduce method of Arrays {O(n) calculation at best}

//iterate through the input array
  //subtract the current index from the return variable (the sum at the start and what will be the remaining amount per iteration)
  //return our return variable, the left over which will equal our missing value




