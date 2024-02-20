/*Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let courseLocation = 'Governor House';
let city = 'Karachi';
let studentName = 'Afraz';
let relationshipStatus = 'single';
let noofGF=0

console.log("Is the course location at Governor House? I predict True.")
console.log(courseLocation == 'Governor House');


console.log("Is the city Lahore? I predict False.");
console.log(city == 'Lahore')


console.log("Is the student's name Afraz? I predict True.");
console.log(studentName == 'Afraz')


console.log("Is the student single? I predict True.");
console.log(relationshipStatus == 'single')


console.log("Is the student's relationship status complicated? I predict False.")
console.log(relationshipStatus == 'complicated');


console.log("Is the course location Karachi? I predict False.");
console.log(courseLocation == 'Karachi');

// Test 7: Check if the city is 'Islamabad'
console.log("Is the city Islamabad? I predict False.");
console.log(city == 'Islamabad');

// Test 8: Check if the student's name is 'Ali' (random guess)
console.log("Is the student's name Ali? I predict False.");
console.log(studentName == 'Ali');


console.log("Is the student have '0' I predict False.");
console.log(noofGF === '0');


console.log("Is the course location Governor House, Islamabad? I predict False.");
console.log(courseLocation == 'Governor House, Islamabad');
