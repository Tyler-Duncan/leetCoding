/**
 * @param {string[]} words
 * @return {number}
 */

/*
Thoughts:

If we must go by order the words are present in the input array, then the first word will be added
to the reference string no doubt

Otherwise we may need to make a reference string with each word being the starter and find the shortest
this should follow the same pattern as below, most likely turned into a recursive helper function

For each word:
    We will search the reference string to see if it is present
    if it is not found in the reference string then
        We need to be add it to the reference string with a # following it
    either way the index at which it starts needs to be added to an indices array
        if it's not found then this should be equivalent to the reference string's length before a new
        word is added


We can use the .indexOf method that strings have to locate the word we're searching for
This will also make adding to the indices array much easier
*/

var minimumLengthEncoding = function(words) {
  //Declare the reference string with the first word + a #, and indices array with 0.
  let referenceString = words[0] + '#';
  const indicesArray = [0];

  //starting with the second word in the input array, iterate over the input
  for (let i = 1; i < words.length; i++) {
    //perform a search using indexOf for the current word in the reference string
  let startingIndex = referenceString.indexOf(words[i])
    //if the indexOf method returns -1 it is not present
    if (startingIndex === -1) {
      //In this case, grab the length of the reference string and add it to the indices array
      //then add the current word to the reference string with a #
      indicesArray.push(referenceString.length);
      referenceString = referenceString + words[i] + '#';
    } else {
      //if the indexOf method does return a number
          //we need only to add the index to the indices array and continue our interation
      indicesArray.push(startingIndex)
    }

  }


  //When the iteration of the input array is over we can determine the length of the reference string and return it
  return referenceString.length;


};

//Test cases

let testWords = ["time", "me", "bell"];

console.log(minimumLengthEncoding(testWords))