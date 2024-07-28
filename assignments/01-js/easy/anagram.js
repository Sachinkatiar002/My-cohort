/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

 // checking the length of both the strings are equal
  if (str1.length !== str2.length) {
    return false;
  }
 //  first changing string to Lower Case and then truning it into an Array  
  let newArr1 = Array.from(str1.toLowerCase());
  let newArr2 = Array.from(str2.toLowerCase());

 //1st  array1.slice() creates a shallow copy of array1 with the same elements [1, 2, 3]. Since no arguments are provided, it copies the entire array. 

 // 2nd n your code, array1.slice().sort() sorts the shallow copy of array1 created by slice(). Since no comparison function is provided, it sorts the elements lexicographically(accending) as strings by default.
  const sortedArr1 = newArr1.slice().sort();
  const sortedArr2 = newArr2.slice().sort();

//   It uses the every() method to iterate over elements of sortedArr1.
// For each element, it compares the element with the corresponding element at the same index in sortedArr2.
// If all elements at corresponding indices are equal, it returns true; otherwise, it returns false.
  return sortedArr1.every((element, index) => element === sortedArr2[index]);


}


module.exports = isAnagram;



