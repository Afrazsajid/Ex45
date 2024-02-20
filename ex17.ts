//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

//• Print a message to each of the two people still on your list, letting them know they’re still invited.

//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

console.log("sorry all the people i can't invite too much people because id shortage of chairs")

for(i in  friends){
  console.log(`sorry ${friends[friends.length-1]} i can't invite you..`)
  friends.pop()

}
invite (friends, message)
friends.pop()
friends.pop()
console.log(friends)
















