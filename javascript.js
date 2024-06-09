console.log("I was printed from external JS file")

let message;
message = "Hello!";
//alert(message);


let text = 'I am a declared variable';
//alert(text);
console.log(text)

let aloha = "Aloha I was copied into another variable"
let greetings;
greetings = aloha;
console.log(greetings)


let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
console.log($ + _); // 3

const myBirthday = '18.04.1982'; //const us UNCHANGING variable


const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
console.log(color); // #FF7F00
//capital-named constants are only used as aliases for “hard-to-remember” values


let admin;
let Name;
Name = "John";
admin = Name;
console.log(admin);


/**
 * Lets do some math!
 * Some rules first:
 *   - Replace the strings to the right of the = with the math expression they describe.
 *   - Do not manually enter the answers to the equations. For example, `const a = 9` would be incorrect as 9 is the answer to the equation you're being asked to write out
 */

const a = 1 + 8;
const b = 22*3;
const c = 5%4;
const d = a-17;
const e = a+b+c+d;

console.log(a, b, c, d, e);


const firstName = "Kamila";
const lastName = "Vankova";
const thisYear = new Date().getFullYear();
const birthYear = 1995;
const age = thisYear-birthYear;
const fullName = firstName + " " + lastName;

// let greeting = "Hello! My name is " + fullName + " and I am " + age + " years old.";
let greeting = `Hello, my name is ${fullName} and I am ${age} years old.`;

console.log(greeting)


let shoppingDone = false;
let childsAllowance;
if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}


function setWeather() {
  const choice = select.value;

  if (choice === "sunny") {
    para.textContent =
      "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
  } else if (choice === "rainy") {
    para.textContent =
      "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
  } else if (choice === "snowing") {
    para.textContent =
      "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
  } else if (choice === "overcast") {
    para.textContent =
      "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
  } else {
    para.textContent = "";
  }
}


let cheese = "Cheddar";

if (cheese) {
  console.log("Yay! Cheese available for making cheese on toast.");
} else {
  console.log("No cheese on toast for you today.");
}


const myText = "The weather is warm";
const myNewText = myText.replace("warm","cold");
console.log(myNewText);

//Function Basics 
//1
function add7(number){
  return number + 7
}
console.log(add7(1))

//2
function multiply(n1,n2){
  return n1*n2
}
console.log(multiply(55,12))

//3
function capitalize(word){
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
console.log(capitalize("kamiLaaaa"))

//4
function lastLetter(letter){
  return letter.slice((-1));
}

console.log(lastLetter("abcd"))