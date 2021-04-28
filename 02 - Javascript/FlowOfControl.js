//checking for equality

let bool1 = true;
let bool2 = true;
let one = 1;

console.log(bool1 == bool2); //would be true
console.log(bool1 == one); //this would be true as in binary true is equal to 1

//Strict Equality = checks the value and type 
console.log(bool1 === one); //Therefore this would be false as although true and 1 are the same they arent the same type
//one is a number and one is a boolean.

let variable;
let variable2 = null;

console.log(variable === variable2); //False this is because undefined and null aren't the same type
console.log(variable == variable2); //would be true as they're both classed as empty

//Inequality
console.log(1 == "1"); // true as the values are the same
console.log(1 === "1"); // false ad although the values are the same the types are not.

console.log(1 != "1"); //false as they are the same and we are checking that they are not equal and they are equal
console.log(1 !== "1"); //true as they are not the same ans we are checking for the inequality 


//Iterator
let x = 1;
console.log(x++); //This first prints the value and then increments it so it would print one
console.log(x); //this would now print 2 as the line above incremented it so now when we call it, it will be 2

let y = 1;
console.log(++y); //This increments the value first and then prints it so this will print the incremented value in one
//line.

//This would start at 0, check that it's less than 5, print i, then come back and iterate i and repeat the last two steps
for(let i=0; i<5; i++) {
    console.log(i);
}

//This would start at 1 because in the console.log we have incremented first and then repeats.
for(let i=0; i<=3;) {
    console.log(`i = ${++i}`);
}

//loops

//do while - will run atleast once before it checks the condition
let canIRun = false;
do {
    console.log("I ran atleast once")
} while (canIRun);

//while loop - checks the condition first

let pups = 0;
let enough = false;
while(enough) {
    console.log("A puppy!");
    pups++;
}

//switch loops - evaluates an expression, then finds teh matching case

let now = new Date();

console.log(now.getDay());
//the value of get day is the day of the week so because it's wednesday it's 3;
// so it goes to case 3 but there is no break statement so it will go to the next one until it hits a break
//so it will print case 5;
switch(now.getDay()){
    case 0:
        console.log(`sunday`);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`weekday`);
        break;
    default:
        console.log(`it's a mystery`);
        break;
}

//Ternary statement
let greeting = "Good ";

if(now.getHours() > 17) {
    greeting += `Evening`;
} else {
    greeting += `Morning`;
}
console.log(greeting);

//syntax: (condition) ? valueIfTrue : valueIfFalse
let greeting2 = (now.getHours() > 17) ? `Good Eveneing` : `Good morning`;
console.log(greeting2);