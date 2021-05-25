/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
  var x= [2,7,6,5,4]
function isArrayLengthOdd(numbers) {
  if (x.length%2 !== 0) 
          {return true}
      else {return false }
}

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
 var x= [2,7,6,5,4,3]
function isArrayLengthEven(numbers) {
  
  if (x.length%2 === 0) 
          {return true}
      else {return false }
  // Your code here
}

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
   let instructors = ["Mshary", "Hasan"]
function addLailaToArray(instructors) {

  instructors.push("Laila")
  return  instructors
 } 
console.log (addLailaToArray(instructors) )



/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
 var Teams =["Brazil", "Germany", "Italy"]
function eliminateTeam(teams) {
  
  Teams.shift()
  const lastElement = Teams.pop()
 return lastElement
}
console.log( eliminateTeam(Teams))
  
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
let fruits= []

function secondHalfOfArrayIfItIsEven(fruits) {

  if(fruits.length%2 > 0 ){
 return fruits

  }
  else{
   fruits = fruits.splice( (fruits.length/2)+1))

return fruits 

  } 

  // Your code here
}

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use string method .slice()
 * - Use string method .endsWith()
 */
function youGottaCalmDown(shout) {
  while (shout[shout.length - 2] === "!") {
   
    shout = shout.slice(0,-1);
  }

  return shout;
}
  // Your code here
}

module.exports = {
  isArrayLengthOdd,
  isArrayLengthEven,
  addLailaToArray,
  eliminateTeam,
  secondHalfOfArrayIfItIsEven,
  youGottaCalmDown,
};
