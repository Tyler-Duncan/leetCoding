/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/*
Finding the average of levels.

Quick thoughts:
 1. Need to have a counter of some sort to track the level the current value is on
 2. May be easier to perform the calculation outside of the traversal of the tree
 3. An object that has keys for the different levels and an array as it's value may be easiest

 Tentative plan:
 Create a return variable that is an array
 Create an object to house the values of the tree
 Create a helper function to traverse the tree and add values to the tracking object
 Use a counter variable to track the current level being looked at
 Iterate/traverse the entire tree, left side then right side.
 for each level, create a new key in the tracking object according the the level
 if the current level has a value then push it to the corresponding level key in the tracking obj

 Once the helper function has traversed and pushed all values to the tracking object begin computations
 for each key of the object perform the equation to find the average of the values
 push each result of the equation to the return array variable

 return the array housing the averages of each level
*/

var averageOfLevels = function (root) {
  //Create the return, and tracking obj variable
  const averagesArray = [];
  const trackingObj = {};

  //Create the helper function
  const getTreeValues = (tree, level) => {
    //Tree will be a binary tree meaning only two child values possible, left and right

    //recursive case:
    //if the level has not been added to the tracking obj then do so, setting the value as an array
    if (!trackingObj.hasOwnProperty(level)) {
      trackingObj[level] = [];
    }

    //push the current value to the tracking obj
    trackingObj[level].push(tree.val)

    //if the current level has children that are not null, perform the recursive function on
    //both children and increase the level count
    if (tree.left !== null) {
      getTreeValues(tree.left, level + 1);
    }

    if (tree.right !== null) {
      getTreeValues(tree.right, level + 1);
    }


    //break case for recursive function
    //if child values are null then just return
    if (tree.left === null && tree.right === null) {
      return;
    }
  }

  //run the helper function to add values to the tracking obj
  getTreeValues(root, 0);

  //now that the tracking object is housing the data we need we will iterate through it
  //calculate the average of the given key's values and push them to the return array
  // for (let key in trackingObj) {
  //   let currentArray = trackingObj[key];

  //   //catch the first level and push it to the averages array
  //   if (currentArray.length === 1) {
  //     averagesArray.push(currentArray[0])
  //     //otherwise find the average of the level
  //   } else {
  //     //iterate through the given levels values and sum them up and divide by the number of items in the given
  //     //array (AKA get the average)
  //     let averageOfLevel = currentArray.reduce((a, b) => { return a + b }) / currentArray.length
  //     averagesArray.push(averageOfLevel);
  //   }

  // }

  //Refactor of averaging the levels
  Object.values(trackingObj).map((array) => {averagesArray.push(array.reduce((a,b) => {return a+b;})/array.length)})


  //return the averagesArray
  return averagesArray;

};

//Test cases
let testTree = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right:null,
    }
  }
}

//Test
console.log(averageOfLevels(testTree));