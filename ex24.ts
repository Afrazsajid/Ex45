/*
Solve this question
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

let fruit = 'apple';

console.log("Is the fruit an 'apple'? I predict True.");
console.log(fruit === 'apple');

console.log("Is the fruit a 'banana'? I predict False.");
console.log(fruit === 'banana');

let city = 'Karachi';

console.log(`Is the city '${city}' in lowercase? I predict False.`);
console.log(city === city.toLowerCase());

let num1 = 10;
let num2 = 5;

console.log(`Is ${num1} greater than ${num2}? I predict True.`);
console.log(num1 > num2);

console.log(`Is ${num2} less than or equal to ${num1}? I predict True.`);
console.log(num2 <= num1);

let raining = true;
let temperature = 20;

console.log("Is it raining and the temperature is above 15°C? I predict True.");
console.log(raining && temperature > 15);

console.log("Is it raining or the temperature is below 10°C? I predict False.");
console.log(raining || temperature < 10);

let fruits = ['apple', 'banana', 'orange'];

console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Is 'grape' is not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
