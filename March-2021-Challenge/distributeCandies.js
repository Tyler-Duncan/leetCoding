/**
Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
 */

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  //First find out how many types of candy are in Alice's candy jar
  //Add them to either an Object or create a Set, to get their count (count of different types)

  //Second, Find out how much candy Alice has
  //Divide this number in half (count of candy she's allowed to eat)

  //Figure which is the restricting factor
  //If she has more types of candy than what she's allowed to eat return the number of candy that she is allowed to eat

  //Else return the number of different types of candy she has available since she
  //can eat all the kinds she has

  //number she's allowed is the number of candies she has divided by two
  let numAllowed = candyType.length / 2;

  //Using set and the spread operator we get all the different types of candy she has
  //with no duplicates
  let typesOfCandy = new Set([...candyType]);

  //The size of the set we just made is the count of different types
  let typeCount = typesOfCandy.size;

  //Simple Ternary to figure: if the number she's allowed to eat is greater than or equal to the
  //number of different types of candy she has (meaning she can eat all types) we return the number of types she has.

  //If not then she has more types than she is allowed to eat
  //so she can eat as many types of candy as she's allowed to eat in general :)
  return numAllowed >= typeCount ? typeCount : numAllowed;
};