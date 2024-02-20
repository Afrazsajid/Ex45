//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function createCar(manufacturer, modelName, ...options) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    
    // Add optional features to the car object
    for (let i = 0; i < options.length; i += 2) {
        let key = options[i]
        let value = options[i + 1]
        car[key] = value
    }
    
    return car
}


let myCar = createCar("Toyota", "Camry", "color", "blue", "year", 2023)

console.log(myCar)
