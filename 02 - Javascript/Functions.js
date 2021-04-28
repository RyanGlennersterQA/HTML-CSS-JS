//making a function

//this way of making a function is function decleration which hoists
function add (a,b) {
    console.log(a+b);
}

add(20,66);

//hello();-//This would throw us an error as hello hasn't been initialised yet

//Function Expression
const hello = function(){
    console.log("Whats up");
};
//this way you can not call the function before it is initialised.
hello();

//Arrow function
//Syntax: const <name> = () => doSomethingInReturn
const hello2 = () => console.log("Look at this");
hello2();

//adding parameters to this

const addition = (a,b) => a+b;
const subtraction = (a,b) => a-b;
const multiplication = (a,b) => a*b;

console.log(addition(2,3));