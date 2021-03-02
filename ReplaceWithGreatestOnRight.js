/**
 * i: an array
 * o: a reordered array
 * c:
 * e:
 *
 * hl: iterate over an array and reorganize it to have the highest number to the right of the current index at the current index
 */

var replaceElements = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 < arr.length) {
      arr[i] = Math.max(...arr.slice(i + 1));
    }
    if (i + 1 === arr.length) {
      arr[i] = -1;
    }
  }
  return arr
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]))