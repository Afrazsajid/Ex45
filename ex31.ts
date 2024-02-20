/*No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/


let usernames = []

if(usernames.length!==0){
  for (name of usernames) {
    if (name==='admin'){
      console.log(`Hello ${name}! would you like to see status report`)
  }
    else{
      console.log(`"Hello ${name}! Welcome back.`)
    }
  }
  
}

else{
  console.log("we need to find users")
}

