
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians) {
    let greatMagicians = [];
    for (let magician of magicians) {
        greatMagicians.push("the Great " + magician);
    }
    return greatMagicians;
}

// Original array of magician's names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the function to make magicians great and store the result in a new array
let greatMagicians = makeGreat(magicians);

// Call the function to show original magicians
console.log("Original Magicians:");
showMagicians(magicians);

// Call the function to show magicians with "the Great" added
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
