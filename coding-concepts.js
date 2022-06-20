// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: It is 5. This is because although push will add the new element to the end of the array it will return the new length of the array instead of the updated items in the array.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The answer is 10. This is because using the length method it retrieves the length  of the string. The answer is 10 instead of 9 because the whitespace in the string holds an index and counts towards the total length.


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The answer o is correct. Each character has an index starting with 0, so by accessing index 4 with bracket notation then the result is o. 0 = H, 1 = e, 2 = l, 3 = l, 4 = 0.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The answer is Ruby. The constant variable index holds the integer value of 1. Once we console log the languages array and  put index in bracket notation to access the contents of the array then index stored value of one moves to the 1 index position in the array. This retrieves Ruby.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]

//console.log(weekendDays.toUpperCase())
// a) Your answer: error
// b) Verify and explain: It is error. The toUpperCase method would be used in this way for strings. In order to cappitalize the contents of the array you would need to iterate over the array using a method or a loop to access each element in the array. The map() method would iterate over each element in the array calling a function on each element in this case capitalizing each one.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes[0])

// a) Your answer: a number
// b) Verify and explain: It is a number. This is because it is accessing the data type of the length of the array not the strings itself. If you did typeof dataTypes it would give you an object and if you did typeof dataTypes[0] it would result in a string for the item at index 0.
