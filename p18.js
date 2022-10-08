/* 18 seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.*/
const favPls = [
  "London bridge",
  "Grand Canyon",
  "The pyramids of Giza",
  "Angkor Wat",
  "Great Wall",
];
const orignalArray = [].concat(favPls);

//Print your array in its original order.

document.write(
  "----------------------Orginal array----------------------------<br>"
);
for (let i = 0; i < favPls.length; i++) {
  document.write(favPls[i] + "<br>");
}
document.write(
  "-------------------------Alphebatic manner-------------------------<br>"
);
//• Print your array in alphabetical order without modifying the actual list.
const alphabeticManner = [].concat(favPls.sort());
for (let i = 0; i < alphabeticManner.length; i++) {
  document.write(alphabeticManner[i] + "<br><br>");
}
document.write(
  "----------------------Orignal again----------------------------<br>"
);

//• Show that your array is still in its original order by printing it.
for (let i = 0; i < orignalArray.length; i++) {
  document.write(orignalArray[i] + "<br><br>");
}
//document.write("--------------------------------------------------<br>");

//• Print your array in reverse alphabetical order without changing the order of the original list.
document.write(
  "-------------------------Reverse manner-------------------------<br>"
);

const reverseManner = [].concat(favPls.reverse());
for (let i = 0; i < reverseManner.length; i++) {
  document.write(reverseManner[i] + "<br><br>");
}
//• Show that your array is still in its original order by printing it again.

document.write(
  "---------------------Orignal Again-----------------------------<br>"
);
for (let i = 0; i < orignalArray.length; i++) {
  document.write(orignalArray[i] + "<br><br>");
}

//• Reverse the order of your list. Print the array to show that its order has changed.
document.write(
  "---------------------reverse order Again-----------------------------<br>"
);

favPls.reverse();
for (let i = 0; i < favPls.length; i++) {
  document.write(favPls[i] + "<br>");
}
//• Reverse the order of your list again. Print the list to show it’s back to its original order.

document.write(
  "---------------------reverse order Again= orignal-----------------------------<br>"
);

const reverseToOrginal = [].concat(reverseManner.reverse());
for (let i = 0; i < reverseToOrginal.length; i++) {
  document.write(reverseToOrginal[i] + "<br><br>");
}
