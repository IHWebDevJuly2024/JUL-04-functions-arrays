// CONDITIONALS

const age = 21;

if (age >= 18) {
  console.log("You can enter, you are an adult");
} else {
  console.log("Sorry, you are minor, you can't enter");
}

const role = "admin";
const username = "Marina";

if (role === "admin") {
  console.log("You can modify the lessons in the portal and fire the teacher");

  if (username === "Marina") {
    console.log("You listen to Taylor Swift");
  } else {
    console.log("You listen to another kind of music");
  }

} else if (role === "teacher") {
  console.log("You can modify the lessons in the portal");
} else {
  console.log("You just have permission to complain");
}

const day = "Friday";

switch (day) {
  case "Monday":
    console.log("have lunch in sonora");
    break;
  case "Tuesday":
    console.log("have lunch in the kitchen");
    break;
  case "Wednesday":
    console.log("potato day");
    break;
  case "Thursday":
    console.log("have lunch in Mcdondals");
    break;
  case "Friday":
    console.log("Ironbeers");
    break;
  case "Saturday":
    console.log("Homework day");
    break;
  case "Sunday":
    console.log("What are you doing in the campus???");
    break;
  default:
    console.log("This is not a day of the week");
}

