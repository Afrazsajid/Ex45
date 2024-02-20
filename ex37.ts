//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function makeShirt(message,size="large"){
    console.log(`A ${size.toUpperCase()} shirt will be printed with the following message: ${message}`);
}

// Call the function
makeShirt("Hello, World!");
