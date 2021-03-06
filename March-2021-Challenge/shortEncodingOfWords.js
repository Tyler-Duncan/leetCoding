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
  //Refactor to solve all cases:
  //Instead of a single reference string, create an array to house all reference string possibilities

  //Iterate over the input array
    //Start a reference string with the current word, adding a # at the end
    //Iterate over the input array again

    //If the current word in the iteration is the word the reference string started with skip over and continue to the next word
    //Test whether the current word is part of the reference string using indexOf

    //if the method returns -1
      //grab the length of the reference string and add it to the indices array for the current reference string
      //then add the word to the reference string with a # at the end

    //otherwise grab the the return of the indexOf method and add it to the current reference string's indices array

  //iterate over the reference strings array and determine the shortest element and return it's length
};

//Test cases

let testWords = ["time", "me", "bell"];

console.log(minimumLengthEncoding(testWords))