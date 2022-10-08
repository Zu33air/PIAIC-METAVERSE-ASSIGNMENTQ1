//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const names = ["Ali", "Haider", "Rizwan", "Karim"];

document.write(names[0]);
document.write(names[1]);
document.write(names[2]);
document.write(names[3] + "<br>");

//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

document.write(names[0] + " How are  you ?");
document.write(names[1] + " How are  you ?");
document.write(names[2] + " How are  you ?");
document.write(names[3] + " How are  you ?" + "<br> <br>");

//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

const favCar = ["Audi", "Ferrari", "lambourginie", "Tesla-X"];

document.write(favCar[0] + " I would like to own Audi car one day" + "<br>");
document.write(favCar[1] + " I would like to drive it" + "<br>");
document.write(favCar[2] + " I would like to use it for shopping" + "<br>");
document.write(
  favCar[3] + "I would like to drive it with my Family" + "<br><br>"
);

//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

const dinnerInv = ["Ali", "Khuram", "Chris"];
for (let i = 0; i < dinnerInv.length; i++) {
  document.write(
    "<b>" +
      dinnerInv[i] +
      "</b>" +
      " You are invited to my dinner party tonight" +
      "<br>"
  );
}

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
document.write(
  dinnerInv[2] + " will not be able come to dinner today" + "<br>"
);

const ind = dinnerInv.indexOf("Chris");
dinnerInv[ind] = "Tommy";
for (let j = 0; j < dinnerInv.length; j++) {
  document.write(
    dinnerInv[j] + " you are invited to dinner at my place" + "<br><br>"
  );
}

/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

*/

dinnerInv.unshift("Haider", "Rehman");

//array.splice(index, howmany, item1, ....., itemX)

dinnerInv.splice(4, 0, "Jacob");

//at the end of an array
dinnerInv.push("Henry");

for (let k = 0; k < dinnerInv.length; k++) {
  document.write(
    dinnerInv[k] +
      " you are invited to the dinner at 8 pm " +
      "<br><br><br><br>"
  );
}
/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/

for (let k = 0; k < dinnerInv.length; k++) {
  document.write(
    dinnerInv[k] +
      " Sorry guys all tables are booked I can only invite two people now for the dinner " +
      "<br><br>"
  );
}

let popNames = dinnerInv.pop();
document.write(
  popNames +
    " Sorry we can't book the table for you ,you are not invited" +
    "<br><br>"
);

let popNames1 = dinnerInv.pop();
document.write(
  popNames1 +
    " Sorry we can't book the table for you ,you are not invited" +
    "<br><br>"
);

let popNames2 = dinnerInv.pop();
document.write(
  popNames2 +
    " Sorry we can't book the table for you ,you are not invited" +
    "<br><br>"
);
let popNames3 = dinnerInv.pop();
document.write(
  popNames3 +
    " Sorry we can't book the table for you ,you are not invited" +
    "<br><br>"
);
let popNames4 = dinnerInv.pop();
document.write(
  popNames4 +
    " Sorry we can't book the table for you ,you are not invited" +
    "<br><br>"
);

for (let f = 0; f < dinnerInv.length; f++) {
  document.write(
    dinnerInv[f] + "You are still invited to the dinner tonight" + "<br>"
  );
}

dinnerInv.pop();
dinnerInv.pop();
document.write(dinnerInv.length + " The array is empty");
