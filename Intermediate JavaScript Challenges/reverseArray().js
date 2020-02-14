/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.
*/

function reverseArray(array) {
    const newArray = []
    for (let word=array.length-1; word>=0;word--) {
      newArray.push(array[word])
    }
    return newArray
  }