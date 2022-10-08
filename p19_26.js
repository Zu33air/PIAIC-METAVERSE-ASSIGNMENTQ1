//19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

const names = ["Ali", "Haider", "Rizwan", "Karim"];
document.write(names.length + " are invited to the dinner tonight");

//20.Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const mountains = ["K2", "Nanga_Parbat", "Mount_Everest", "RakaPoshi"];

//21. They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

let person = {
  firstName: "Zubair",
  lastName: "Ahmad",
  age: 24,
  eyeColor: "Brown",
};

//22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

const myErrorArray = ["A", "B", "C", "E", "G"];

let indexOfArray = myErrorArray.indexOf("f");
document.write(indexOfArray + "<br>");

/*
23.Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */

let hour = 17;
document.write("I predict this is true" + "<br>");
if (hour < 18) {
  var greeting = "Good day";
  document.write(greeting + "<br>");
}

let age = 13;
document.write("I predict this is true" + "<br>");
if (age == 13) {
  document.write("You cannot play PUBG" + "<br>");
}

let n = "ahmad";
document.write("I predict this is true" + "<br>");
if (n == "ahmad") {
  document.write("Passcode matched");
} else {
  document.write("Incorrect password");
}

let ab = "ABC";
let cd = "KLM";
document.write("I predict thsi will be true" + "<br>");
if (typeof ab == typeof cd) {
  document.write("type matched");
} else {
  document.write("Not matched");
}

let vam = 12;
let pam = 12;
document.write("I predict it is true" + "<br>");
if (vam === pam) {
  document.write("All type matched");
} else {
  document.write("typeof is not matching");
}
// False condtional statment

let name = "Ahmad";
document.write("I predict it is false" + "<br>");
if (name === "ahmad") {
  document.write("Passcode matched");
} else {
  document.write("Incorrect passcode");
}

let a = "A";
let b = 2;
document.write("I predict this is flase" + "<br>");

if (typeof a == typeof b) {
  document.write("Type matched ");
} else {
  document.write("Types are not matching");
}

let kbc = 12;
let trp = "12";
document.write("I predict it is false" + "<br>");
if (kbc === trp) {
  document.write("All type of matched");
} else {
  document.write("Not matching" + "<br>");
}

let x = "0";
document.write("I predict it is false" + "<br>");
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}

document.write(text + "<br>");

let afb = "Chris";
let cfd = "John";
document.write("I predict it is false" + "<br>");
if (afb.length == cfd.length) {
  document.write("Lengtho of string is same");
} else {
  document.write("Length are not the same");
}

/*
24.More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
 
• 
*/

//Tests for equality and inequality with strings

const str1 = "Zubair";
const str2 = "Ahmad";
document.write("<br>");
if (str1.length == str2.length) {
  document.write("string.length is same");
} else {
  document.write("length are not the same");
}

//Tests using the lower case function

document.write("<br>");
const abcf = str1.toLowerCase();
if (abcf === "zubair") {
  document.write("All lower case");
} else {
  document.write("please convert it into lower case");
}
//Tests using "and" and "or" operators
document.write("<br>");
let q = 6;
let y = 3;
if (q < 10 && y > 1) {
  document.write("Conditon satisfied");
} else {
  document.write("Condition not matched");
}

// Or Operator
document.write("<br>");
if (q == 5 || y == 3) {
  document.write("conditions matched");
} else {
  document.write("not matched");
}

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

document.write("<br>");
let num1 = 12;
let num2 = 123;

if (num1 == num2) {
  document.write(num1 + " is eqyal to" + num2);
} else if (num1 > num2) {
  document.write(num1 + " is greater than " + num2);
} else if (num1 < num2) {
  document.write(num1 + " is less than " + num2);
}

//Test whether an item is in a array //• Test whether an item is not in a array
document.write("<br>");
let abc = "Hello Junior";

if (Array.isArray(abc)) {
  document.write("it is an array");
} else {
  document.write("Not an array");
}

/*25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• 
• 
*/

//Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

var alien_color = "green";

if (alien_color == "green") {
  document.write("the player just earned 5 points");
}

//Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if (alien_color == "green") {
  document.write("passes");
}

if (alien_color == "yellow") {
  document.write("passes");
} else {
}
/*
//26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.?*/

if (alien_color == "green") {
  document.write("Just earned 5 points");
} else {
  document.write("Just earned 10 points");
}
//else block
