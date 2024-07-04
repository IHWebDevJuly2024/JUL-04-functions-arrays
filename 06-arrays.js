const students = ["Esteban", "Kim", "Aquiles"];

console.log(students[0]);

for (i = 0; i < students.length; i++) {
  console.log(students[i]);
}

// ARRAY METHODS
// add new element at the end
students.push("Laia");
// add new element at the beginning
students.unshift("Marina");

// delete from the end
students.pop();

// delete the first element
students.shift();

console.log("ARRAY BEFORE SPLICE: ", students);

// first argument is the index and the second is how many elements we delete
students.splice(-1, 1, "Antonio", "Jesús"); // we delete the last one and we add 2 more

console.log("ARRAY AFTER SPLICE: ", students);

const arrayNames = ["Pedro", "Jake", "Joan"];
arrayNames.forEach((ditto, index) => {
  console.log("HELLOOOOO ", index);
  console.log(ditto.toUpperCase());
});

console.log(arrayNames);

// EXERCISE

const raceResults = ["Helen", "John", "Peter", "Merry"];

// SPOILER ALERT! THIS IS CALLED CALLBACK FUNCTION (a function that is passed as an argument to another function)
raceResults.forEach((elem, index) => {
  console.log(elem + " finished the race in " + (index + 1) + " position!");
});

function printStars(howMany) {
  console.log("*".repeat(howMany));
}

[1, 2, 3, 4, 5].forEach((num) => {
  printStars(num);
});

// SPLIT

const phrase = "This is long enough for a string to count it words";

const words = phrase.split(" ");

console.log(words);
console.log("The total number of words in your string is: ", words.length);
