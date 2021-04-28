//Objects - Key/Value pair - a container of relevant information

//curly brackets declares an object
let myObject = {};

let cars = {
    "name" : "Ryan",
    "make" : "mercedes",
    "model" : "GLA45 AMG",
    "year" : 2019,
    "colour" : "Grey"
}

let kevin = {
    "make" : "VW",
    "name" : "Shelia",
    "model" : "Golf",
    "year" : 2012,
    "colour" : "Grey"
}

// the cars an info are objects and now we can add them into an array
//let garage = [cars, kevin];

//if we wanted to print out a specific thing from the object we can use
console.log(kevin["colour"]);
//or we can use
console.log(kevin.colour);

//adding things to objects
kevin.engineSize = 3.5;
console.log(kevin);

//ways to print out the properties of kevins car
for(let attributes in kevin){
    //This prints out just the labels of the attributes
    console.log(`Keys: ${attributes}`);
    //this actually goes into the attributes and gets the values
    console.log(`Values: ${kevin[attributes]}`)
}

let garage = [cars, kevin, {"make":"Audi", "model": "S5", "year":2020, "colour":"Black", "EngineSize": 3}];
console.log(garage);

//A for loop to print out all the makes
for(let i=0; i<garage.length; i++) {
    console.log(garage[i].make);
}

//an enchanced for loop to get the makes and print them out.
for(let car of garage) {
    console.log(car["make"]);
}

//printing all of the values in the object inside the array
//for the cars inside the array of garage
for(let car of garage) {
    //print them out
    console.log(car); //looping through the array
    //for the keys inside the object cars
    for(let key in car) { //looping through the object
        //get the key and then get the value of those keys from the object.
        console.log(`Key: ${key} Value: ${car[key]}`);
    }
} 

//printing all the values of the keys inside the object without the actual keys.
console.log(Object.values(cars));

//JSON -------------------------- Javascript Object Notation
let myJSONobject = {
    "tesco" : [{"ProductName": "7up", "price" : 0.99, "quantity":5000},
    {"ProductName": "chocolateBar", "price" : 2.99, "quantity":5000},
    {"ProductName": "ToiletPaper", "price" : 4.99, "quantity":5000}
    ],
    "carPark" : [
        {"make": "Mercedes", "name":"Ryan", "Model": "GLA45 AMG", "Year": 2018, "colour":"Black"}
    ]
}

myJSONobject.carPark.push({
    "name":"Ruby",
    "make": "VW",
    "Model" : "Golf",
    "year" : 2019,
    "colour" : "Grey" 
})

console.log(typeof myJSONobject);

let convertToString = JSON.stringify(myJSONobject); //converts to string
console.log(convertToString);
console.log(typeof convertToString);

//convert from a string to an object seamlessly
let userData = `{"name":"Ryan"}`;

console.log(typeof userData);
let convertToObject = JSON.parse(userData);

console.log(convertToObject);
console.log(typeof convertToObject);