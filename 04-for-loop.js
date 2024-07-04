for (i = 0; i < 10; i++) {
  console.log("Iteration of the loop " + i);
}

const word = "Ironhack";

for (i = 0; i < word.length; i++) {
  console.log(word[i].toUpperCase());
}

for (i = word.length - 1; i >= 0; i--) {
  console.log(word[i]);
}

const word2 = "Barcelona";

for (character of word2) {
  console.log(character);
}

const numbers = [21, 342, 56436, 7, 5, 3, 1];

for (number of numbers) {
  if (number === 342) {
    continue; // This goes to the next iteration of the loop and doesn't run the rest of the code
  }
  console.log(number);

  if (number === 7) {
    break; // we can break the loop
  }
}
