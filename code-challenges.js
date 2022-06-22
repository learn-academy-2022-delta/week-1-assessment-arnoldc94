// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:
// create a function that passes in 2 strings.
// create an if conditional statement in the function that compares if the first string is larger than the second string.
// if the first string is larger return <string1> is larger than <string2>
// create an else if statement to compare if the first string is smaller than the second string.
// if the second string is larger return <string2>  is larger than <string1>.
// create an else statement that will handle if the two strings are equal.
// if the strings are equal return <string1> is equal to <string2>
// log the function passing in the two strings or the variables containing the strings provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

const largerString = (string1, string2) =>{
    if(string1 > string2){
        return `${string1} is larger than ${string2}`
    }else if(string1 < string2){
        return `${string2} is larger than ${string1}`
    }else{
        return `${string1} is equal to ${string2}`
    }
}

console.log(largerString(fruit1, fruit2))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
// create a function named tempEvaluation
// create the paramater temp to pass in the temperatures value to the function
// create an if conditional statement that evaluates whether the variable temp is above the boiling point of 212. 
// if the temp  above 212 return the <temp> is above boiling point.
// create an else if conditional statement that evaluates whether the variable temp is equal to 212 .
// if the temp variable is equal to 212 return the <temp> is at boiling point
// create an else statement that evaluates whether the variable temp is less than  212 .
// if the temp variable is below 212 return the <temp> is below boiling point
//invoke the function in console.log below the function and pass in the the paramater


const temp1 = 42
const temp2 = 350
const temp3 = 212

const tempEvaluation = (temp) =>{
    if(temp > 212){
        return temp + " is above boiling point"
    }else if(temp === 212 ){
        return temp + " is at boiling point"
    }else{
        return temp + " is below boiling point"
    }
}

console.log(tempEvaluation(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: // create a variable that will store the new array combined array.
// inside the new array write the first array
// add the concat method and the second array that you want to add to the end of the first array.
// log the new array and use the length method to display the new length of the array.

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

let newArray = myNumbers1.concat(myNumbers2)
console.log(newArray.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 atleD"

// Pseudo code:
// create a variable to store the reversed string
// set the variable equal to current cohort and then using dot notation use the split, reverse and join method.
// the split method will split each character into its own index in an array.
// the reverse method will reverse the order of the array.
// the join method with ""(join("")) will move the array back into a string. If you use the quotations it will remove the commas from in between the characters.
// log the reverse string variable.

const currentCohort = "Delta 2022"


let reverseCohort = currentCohort.split("").reverse().join("")
console.log(reverseCohort)

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// create a for loop that will loop over the array
// use the array length in the for loop to stop the iterations once it reaches the end of the array.
//create a conditional if statement comparing whether myArray modulo two strictly equals 0.
// if it equals 0 log "even"
// create an else statement for the odd integers.
// log "odd" in the else statement

const myArray = [13, 34, 5, 10, 27, 42]

for (i = 0; i < myArray.length; i++){
    if( myArray[i] % 2 === 0){
        console.log("even")
    }else{
        console.log("odd")
    }
}
console.log(myArray)
// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// create a subtraction arrow function that passes in two variables for two numbers.
// create a conditional if statement in the function that states if the first number is greater than or if it is equal to the second number then return the first number minus the second number.
// create an else statement that handles the opposite if the first number is less than the second number then return the second number minus the first number.
// log and invoke the function passing the first set of numbers to obtain 42.
// log and invoke the function passing in the second set of numbers to obtain 3.

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

 const subtraction = (num1, num2) =>{
     if(num1 >= num2){
         return num1 - num2
     }else{
         return num2 - num1
     }
 }

 console.log(subtraction(number1, number2))
 console.log(subtraction(number3, number4))

