//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


//Date:19/feb/23


//Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.


//it stores number in a variable 
let fav_num = 23


//it display my favorite number 
console.log(`my favorite number is ${fav_num}`)



//Name Cases: Store a person’s name in a variable, and then print that person’ name in lowercase, uppercase, and titlecase.

//storing name 
let name='AFraz'




//displaying message for name
console.log(`Hello ${name.toLowerCase()}, would you like to learn some Python today?`)
//in uppercase
console.log(`Hello ${name.toUpperCase()}, would you like to learn some Python today?`)

//in titlecase



//function to convert name  knto title cse
function titleCase(str) {
  //converting name in to lower case and making list of each word 
  str = str.toLowerCase().split(' ');
  //loop it will run number of work times
  for (var index = 0; index < str.length; index++) {
    //converting first letter of each word in to uper case 
    str[index] = str[index].charAt(0).toUpperCase() + str[index].slice(1); 
  }
  //returning the chanhe word in to single sentence 
  return str.join(' ');
}

console.log(`Hello ${titleCase(name)}, would you like to learn some Python today?`)





