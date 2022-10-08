/* 27.
Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

var alien_color1 = "green";
var alien_color2 = "yellow";
var alien_color3 = "red";
document.write("________________________<br>");
// for green
if (alien_color1 == "green") {
  document.write("you have earned 5 points");
} else if (alien_color1 == "yellow") {
  document.write("you have just earned 10 points");
} else if (alien_color1 == "red") {
  document.write("you have earned 15 points");
}
document.write("<br>________________________<br>");
// for yellow

if (alien_color2 == "green") {
  document.write("you have earned 5 points");
} else if (alien_color2 == "yellow") {
  document.write("you have just earned 10 points");
} else if (alien_color2 == "red") {
  document.write("you have earned 15 points");
}
document.write("<br>________________________<br>");
// for red;

if (alien_color3 == "green") {
  document.write("you have earned 5 points");
} else if (alien_color3 == "yellow") {
  document.write("you have just earned 10 points");
} else if (alien_color3 == "red") {
  document.write("you have earned 15 points");
}
document.write("<br>__________P.28______________<br>");
/* 28.
Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder. */

let p_age = 67;

if (p_age < 2) {
  document.write("Baby" + "<br>");
} else if (p_age >= 2 && p_age < 4) {
  document.write(" Toddler" + "<br>");
} else if (p_age >= 4 && p_age < 13) {
  document.write("Kid" + "<br>");
} else if (p_age >= 13 && p_age < 20) {
  document.write("Teenager");
} else if (p_age >= 20 && p_age < 65) {
  document.write("Adult");
} else if (p_age >= 65) {
  document.write("Elder");
}

document.write("<br>___________P.29_____________<br>");

/* 29.
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
 */

//array of three fruits
const favorite_fruits_a = ["Apple", "Bananas", "Grapes"];

// for 5 If statement
const favorite_fruits = ["Apple", "Bananas", "Grapes", "Pine Apple", "Orange"];

if (
  favorite_fruits.find(function abc(e) {
    return (e = "Apple");
  })
) {
  document.write("I really Like Apple" + "<br>");
}

if (
  favorite_fruits.find(function efg(k) {
    return (k = "Bananas");
  })
) {
  document.write("I really Like Bananas" + "<br>");
}

if (
  favorite_fruits.find(function ijk(l) {
    return (l = "Grapes");
  })
) {
  document.write("I really Like Grapes" + "<br>");
}

if (
  favorite_fruits.find(function nop(q) {
    return (q = "Pine Apple");
  })
) {
  document.write("I really Like Pine Apple" + "<br>");
}

if (
  favorite_fruits.find(function rst(u) {
    return (u = "Orange");
  })
) {
  document.write("I really Like Orange" + "<br>");
}

/*

30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

*/

document.write("<br>___________P.30_____________<br>");

const usernames = ["Eric", "admin", "Ali", "Joshua", "Chris"];

for (let i = 0; i < usernames.length; i++) {
  if (usernames[i] == "admin") {
    document.write(
      " Hello <b>admin</b>, would you like to see a status report?" + "<br>"
    );
  } else {
    document.write(
      "Hello " + usernames[i] + " Thank you for logging in again " + "<br>"
    );
  }
}

/* 31.
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

document.write("<br>___________P.31_____________<br>");

const usernames1 = ["Eric", "admin", "Ali", "Joshua", "Chris"];

for (let i = 0; i < usernames1.length; i++) {
  if (usernames1[i] == "admin") {
    document.write(
      " Hello <b>admin</b>, would you like to see a status report?" + "<br>"
    );
  } else if (usernames1.length == 0) {
    document.write("We nned to find some users");
  } else {
    document.write(
      "Hello " + usernames1[i] + " Thank you for logging in again " + "<br>"
    );
  }
}

// Remove all of the usernames from your array, and make sure the correct message is printed.
document.write("<br>");
const usernames2 = [];

if (usernames2.length == 0) {
  document.write("We need to find some users");
}

for (let i = 0; i < usernames2.length; i++) {
  if (usernames2[i] == "admin") {
    document.write(
      " Hello <b>admin</b>, would you like to see a status report?" + "<br>"
    );
  } else {
    document.write(
      "Hello " + usernames2[i] + " Thank you for logging in again " + "<br>"
    );
  }
}

document.write("<br>___________P.32_____________<br>");

/* 32.
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/

const current_users = ["Ali", "Jacob", "Haider", "Zubair", "Zahid"];
const new_users = ["Wasim", "Kashif", "Haider", "Zubair", "Faysal"];

for (let i = 0; i < current_users.length; i++) {
  for (let k = i + 1; k < current_users.length; k++) {
    if (current_users[i] != new_users[k]) {
      document.write("Username is not availave" + "<br>");
    } else {
      document.write("username available");
    }
  }
}
