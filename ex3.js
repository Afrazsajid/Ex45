//Name Cases: Store a person’s name in a variable, and then print that person’ name in lowercase, uppercase, and titlecase.


let name='AFraz'





console.log(`Hello ${name.toLowerCase()}, would you like to learn some Python today?`)
//in uppercase
console.log(`Hello ${name.toUpperCase()}, would you like to learn some Python today?`)

//in titlecase




function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var index = 0; index < str.length; index++) {
    str[index] = str[index].charAt(0).toUpperCase() + str[index].slice(1); 
  }
  return str.join(' ');
}

console.log(`Hello ${titleCase(name)}, would you like to learn some Python today?`)




