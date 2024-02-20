//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from //Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

let friends = ["Nisar", "Mehak", "Tasbiha"];
let message = "you are invited to my party;";

function invite(friends, message){
  for (i of friends){
    console.log(message,i)
  

}
}  

invite (friends, message )

// Remove "Mehak" from the list
let notguest  ="Mehak"
friends.splice(friends.indexOf(notguest), 1)
console.log(notguest," can not come\n.")

invite(friends, message )


console.log('hey everyone i ave found new table so i with new people ')

var new_guests={
  "Asim":0,"legend":2,"raju":3
    }
for (i of Object.keys(new_guests)){
  friends.splice(new_guests[i],0,i)
  
}
invite(friends,message)














