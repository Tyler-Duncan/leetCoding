/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
  //First find out how many types of candies are in Alice's candy jar
      //Add them to either an Object or create a Set, to get their count (count of different types)
  //Second, Find out how many candies Alice has
      //Divide this number in half (count of candies she's allowed to eat)
  //Figure which is the restricting factor
      //If she has more types of candies than what she's allowed to eat return the number of candies
      //shes allowed to eat
      //Else return the number of different types of candies she has available

  let numAllowed = candyType.length/2;
  let typesOfCandy = new Set([...candyType]);
  let typeCount = typesOfCandy.size;

  return numAllowed >= typeCount ? typeCount : numAllowed;
};