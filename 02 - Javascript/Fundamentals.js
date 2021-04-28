//let/const
//This is the javascript equivelent of variables 
//let is something we can change.
let firstName = "Ryan"
//A const is something that doesn't change and you can't try and change it later on.
//As a guide we usually put reference names of consts in capitals so you know it's a const.
const VALUE = "Doesn't change"

//This is the way of printing things to the system.
console.log(firstName);

//In java we use a whole load of data types like:
//int, string, boolean, float, double, long, array and object

//In JS we use datatypes:
//number, string, object, Array, Null, undefined.

let surename = "Johnson";
let age = 25;
let salary = 40000;
//in lists/arrays is JS you can store any datatypes you arent limiting to just strings, you can store numbers, booleans etc.
let siblings = ["Gary", "Jim", "Sally"];
let bool = false;

//This is a way of finding of the datatype of variables.
console.log(typeof surename); //Is a string
console.log(typeof age); //number, in javascript everything is always a number rather than int, float, double etc.
console.log(siblings);
console.log(typeof siblings); //officially called an object
console.log(typeof bool); // boolean

//Accessing things in a array
console.log(siblings[1]); //will return Jim

let ryan;
//here we have made a reference but not give it any value so if we try and print this it will be printed as undefined.
console.log(ryan);

//template literal
//TEMPLATE LITERALS USE THE BACK TICKS `` rather than "" or ''.
//this allows you to do things cleaner and in one line rather than writing out all the variables and calling them.
console.log(`5 + 3 = ${5+3}`);

//You can use ${val} to access variables you just put the variable inside the curly brackets rather than using +

//this creates the same as the line above but in way more code.
let str = "5 + 3 = "
let val = 5+3;
let str2 = str +val;
console.log(str2);

//using css in javascript printing
let myTxt = "This could be useful!";
console.log(" %c this is a message with some CSS."+myTxt,"color: yellow; font-style: italic; background-color: blue;padding: 2px");

function sayHello() {
    return "Someone says hello";
  }

//Remember when trying to print a function you have to have the () at the end that will actually print whats inside the
//function rather than just the whole function 
console.log(sayHello());

//Datatypes are dynamic in javascript. 
let camelCase = "";

