//Arrays are a way of storing information.

//Making an empty array calling it array1
let array1 = [];

//You can also make an array with a set amount of objects and not fill it in
let array = Array(10);

//In JS you can access any index at anytime, even if there is nothing in that index, it will just be undefined.

//you can simply add things into your array like this
array[2] = "Mercedes";
console.log(array);
//this will give you empty sets and number 3 will be mercedes.

//In JS you can add anything into an array it doesn't matter if the datatypes are different.
let classroom = [];
classroom[0] = "Ryan";
classroom [1] = {"id": "Student", "room": "25B", "teachers": ["Savannah"]};
classroom[5] = null;

console.log(classroom);

//to add something to the end of the array if you dont know the length
classroom.push("Steve");
console.log(classroom);
//to remove from the end of the array
classroom.pop();
console.log(classroom);

//add to the start of the array
classroom.unshift("Some Value");
console.log(classroom);
//remove from the start of the array
classroom.shift();
console.log(classroom);

//when would .length be useful?
//to print everything in the array

for(let i=0; i<classroom.length; i++) {
    console.log(classroom[i]);
}

console.log("----------------------------------")
//enhanced for loop
//does the same thing as the for loop but easier coding
//creating a variable named person that will save everything that is stored in the array classroom so we can print it.
for(let person of classroom) {
    console.log(person);
} 