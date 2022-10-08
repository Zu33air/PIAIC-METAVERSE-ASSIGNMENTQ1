//2. Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

var name = "Zubair ahmad";
document.write(
  "Hello " + name + ", would you like to learn some Python today" + "<br>"
);

//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

document.write(name.toLowerCase() + "<br>");

document.write(name.toUpperCase() + "<br>");

function titleCase(a) {
  var name = a.toLowerCase().split(" ");
  for (var i = 0; i < name.length; i++) {
    name[i] = name[i][0].toUpperCase() + name[i].slice(1);
  }
  document.write(name.join(" "));
  return name;
}
titleCase(name);

//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:Albert Einstein once said, “A person who never made a mistake never tried anything new.”

//“As you start to walk on the way, the way appears.”

document.write(
  `Rumi once said "As you start to walk on the way, the way appears"` + "<br>"
);

//5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

//Patience is the key to joy. rumi

var famous_person = "Rumi ";
var message = "Patience is the key to joy";

document.write(famous_person + message + "<br>");

//6. Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

var s_Names = "  Jalal Uddin Rumi  ";

document.write("hello" + s_Names + "how are you?" + "<br>");

document.write(s_Names.trim() + "<br>");

//7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

document.write(4 + 4 + "<br>");
document.write(4 * 2 + "<br>");
document.write(16 / 2 + "<br>");
document.write(12 - 4 + "<br>");

//9. Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var favNum = 17;
document.write("My favourite number is " + favNum + "<br>");

//10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

var s_Names = "  Jalal Uddin Rumi  "; // this will store value in variable

document.write("hello" + s_Names + "how are you?" + "<br>"); // it will print the message

document.write(s_Names.trim() + "<br>");
