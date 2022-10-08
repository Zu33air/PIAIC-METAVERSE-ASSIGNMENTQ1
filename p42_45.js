document.write("<br>_____________42____________ <br>");
/*
42.
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

*/
const magician_names1 = ["Zubair", "ahmad", "Polly", "Chris"];

function make_great(magician_names1) {
  for (let i = 0; i < magician_names1.length; i++) {
    document.write(magician_names1[i].concat(" The Great") + "<br>");
  }
}

make_great(magician_names1);

document.write("<br>_____________43____________ <br>");
/*
43.
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

*/

var magician_names2 = ["Zubair", "Ahmad", "Polly", "Chris"];

var myArr = [];
function make_great2() {
  for (let i = 0; i < 4; i++) {
    let itemsInArr = magician_names2.pop();
    myArr.push(itemsInArr + " The Great ");
  }
  for (let i = 0; i < 4; i++) {
    document.write(myArr[i] + "<br>");
  }
}

function show_magicians2() {
  document.write(`<b>Orignal Array</b>  <br>`);
  for (let i = 0; i < 4; i++) {
    document.write(magician_names2[i] + " <br>");
    //
  }
  document.write(`<b>Modified Array</b>  <br> `);
  make_great2();
}

show_magicians2();
document.write("<br>_____________44____________ <br>");
/*
44.
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

*/

function make_sandwich(...names) {
  document.write("<br>" + "I'll make you a great sandwich :" + "<br>");
  for (var i = 0; i < names.length; i++) {
    document.write("... by adding " + names[i] + "to your sandwich." + "<br>");
  }
  document.write("Your sandwich is ready" + "<br>");
}

make_sandwich("roast beef", "cheddar cheese", "lettuce", "honey dijon");
make_sandwich("turkey", "apple slices", "honey mustard");
make_sandwich("peanut butter", "strawberry jam");

document.write("<br>_____________45____________ <br>");
/*
45.
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function myFun(manufacturer, model) {
  const myObj = {
    manufacturer: manufacturer,
    model: model,
    
  };
  console.log(myObj);
}

myFun(1, 3, (k = "Kelo"), (m = "Hello"));
