console.log("THE JS FILE IS WORKING!");
const character = prompt("Favorite Game of Thrones main character:").toLowerCase();
let house = "";

switch (character) {
  case "khal drogo":
    house = "Dothraki Horselord";
    break;
  case "Daenerys".toLowerCase():
    house = "Targaryen";
    break;
  case "Jon Snow".toLowerCase():
  case "Sansa".toLowerCase():
  case "Arya".toLowerCase():
    house = "Stark";
    break;
  default:
    house = "other";
}

console.log(`Your favorite character is from the house ${house}.`);
