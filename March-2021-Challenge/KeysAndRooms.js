// There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.

// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

// Initially, all the rooms start locked (except for room 0).

// You can walk back and forth between rooms freely.

// Return true if and only if you can enter every room.

// Example 1:

// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.
// Example 2:

// Input: [[1,3],[3,0,1],[2],[0]]
// Output: false
// Explanation: We can't enter the room with number 2.
// Note:

// 1 <= rooms.length <= 1000
// 0 <= rooms[i].length <= 1000
// The number of keys in all rooms combined is at most 3000.

/**
 * @param {number[][]} rooms
 * @return {boolean}
 *
 * I: An array containing arrays with numbers corresponding to the keys to other rooms
 *
 * O: Boolean
 *
 * C:
 *
 * E:Starting room with 0 keys
 *
 * HL: Going through rooms and gathering keys, check if all rooms can be entered. Going back into rooms is allowed.
 * Idea:
 * Go through each room with a for loop and add the keys in the room to a hash table
 * if we have the key to the next room then continue the iteration, if not then return false
 *
 *
 */
 var canVisitAllRooms = function(rooms) {
//establish keys available
const keys = [];
  //start with room 0 begin iteration
  for (let i = 0; i < rooms.length; i++) {
    //add the current rooms keys to our keys object
    for (let j = 0; j < rooms[i].length; j++) {
      if (!keys.includes(rooms[i][j])) {
        keys.push(rooms[i][j]);
      }
    }


    //if key for next room is not available and there are no more rooms return false
    if (i < rooms.length - 1 && !keys.includes(i + 1)) {
      console.log(keys)
      return false;
    }
    //otherwise continue iteration

  }
//return true
return true;
};

console.log(canVisitAllRooms([[1],[2],[3],[]]));

console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]]));



var canVisitAllRooms = function(rooms) {
  //establish keys available
  let keys = {}
  let i = 0;
  let j = rooms.length - 1;
    while (i <= j) {
    keys =	getKeys(rooms[i], keys);
    keys = 	getKeys(rooms[j], keys);
      if (!hasRightKey(i, keys) && !hasLeftKey(j, keys)) return false;
      if (hasRightKey(i, keys)) i++;
      if (hasLeftKey(j, keys)) j--;
    }
  return true;
  }
  const getKeys = (arr, keys) =>{
     arr.forEach(key => keys[key] = true);
     return keys
     };
  const hasLeftKey = (idx, keys) => keys[(idx - 1).toString()];
  const hasRightKey = (idx, keys) => keys[(idx + 1).toString()];