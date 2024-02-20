//you Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}


let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the function to make magicians great
makeGreat(magicians);

// Call the function to show magicians
showMagicians(magicians);
