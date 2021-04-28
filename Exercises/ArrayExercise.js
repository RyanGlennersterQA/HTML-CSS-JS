let quote = ["I", "am", "your", "father"];
console.log(quote[2]);

quote.pop();
console.log(quote);

quote.push("father");
console.log(quote);

quote.unshift("Luke");
console.log(quote);

const erroneousWord = "Luke"
const lukeIsHere = quote.find(element => element == "Luke"); 
let lukeIsAt;
console.log(lukeIsHere);

if(lukeIsHere == "Luke") {
    lukeIsAt = (quote.findIndex(element => element == erroneousWord));
    console.log(lukeIsAt);
    quote[0] = "No";
} else {
    console.log("I don't know what you're talking about");
};

let output = "";

for(i=0; i<quote.length; i++) {
    if()
}


