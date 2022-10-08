document.write("<br>_____________35____________ <br>");
/* 35.
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

*/

const fav_pets = ["dog", "cat", "hamster"];

for (let i = 0; i < fav_pets.length; i++) {
  document.write(fav_pets[i] + "<br>");
}

//Modify your statement;

for (let i = 0; i < fav_pets.length; i++) {
  document.write(fav_pets[i] + " Would make a great pet." + "<br>");
}

document.write("Any of these animals will make a lovely pet.");

document.write("<br>_____________36____________ <br>");
/*

36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/

function make_shirt(size, text) {
  document.write(
    "The " +
      size +
      " of the T_shirt is and the text printed on it is " +
      "<b>" +
      text +
      "</b>."
  );
}

make_shirt(34, "I Love Javascript");

document.write("<br>_____________37____________ <br>");

/* 37.
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt1(size, text) {
  if (size == undefined && text == undefined) {
    document.write("Large T_shirt  <b> I love JavaScript</b>." + "<br>");
    document.write("Medium Shirt <b> I Love Programing </b>." + "<br>");
  } else {
    document.write(
      "The size of the T_shirt is " +
        size +
        " and the Text Printed on it is " +
        "<b>" +
        text +
        "</b>" +
        "<br>"
    );
  }
}

make_shirt1();
make_shirt1(19, "I Love Pakistan");

document.write("<br>_____________38____________ <br>");

/*
38.
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.


*/

function describe_city(name, country) {
  if (country == undefined) {
    document.write("My city is " + name + " My country is Pakistan" + "<br>");
  } else {
    document.write(
      "My City is " + name + " and My country is " + country + "<br>"
    );
  }
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Miami", "USA");

document.write("<br>_____________39____________ <br>");

/*
39.
City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.

*/

function city_country(name, country) {
  document.write("<br>" + name + "," + country + "<br>");
}

city_country("Lahore", "Pakistan");
city_country("Karachi", "Pakistan");
city_country("Oranldo", "USA");

document.write("<br>_____________40____________ <br>");
/*
40.
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

*/

function make_album(name, title, track) {
  if (track == undefined) {
    album_dictionary = {
      artist: name,
      title: title,
    };
    return album_dictionary;
  } else {
    album_dictionary = {
      artist: name,
      title: title,
      tracks: track,
    };
    return album_dictionary;
  }
}
make_album("Kim", "Groove on");
document.write(album_dictionary.artist + album_dictionary.title);
console.log(make_album("Nina", "Flawless"));
console.log(make_album("Jolly", "One Time"));

// Function with addtional parameter for tracks
console.log(make_album("Zubair", "The round", 12));

document.write("<br>_____________41____________ <br>");

/*
41.
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

const magician_names = ["Zubair", "ahmad", "Polly", "Chris"];

function show_magicians(arr) {
  for (let i = 0; i < arr.length; i++) {
    document.write(magician_names[i] + "<br>");
  }
}

show_magicians(magician_names);

document.write("<br>_____________42____________ <br>");
