// FUNCTION DECLARATION
// We are not going to run this code until we call the function
function sayHi() {
  console.log("HELLO WORLD!");
}

// FUNCTION INVOCATION
// Now we are running the code of the function
sayHi();

// PARAMETERS
// Our function can need some information that is going to be provided in the function invocation
function sayMyName(name) {
  console.log(`Your name is ${name}`);
}

// When I call the function we need to provide this info
// ARGUMENTS
sayMyName("Marcel");
sayMyName("Mica");
sayMyName("Marina");

function capitalize(word) {
  return word.toUpperCase();
}

const capitalizedName1 = capitalize("dsadsadsadsa");
const capitalizedName2 = capitalize("lorena");
console.log(capitalizedName1);
console.log(capitalizedName2);

function printName(name, email) {
  if (name.length === 0) {
    return "Please provide a name";
  }
  
  if (!email) {
    return "Please provide an email";
  }

  return `Your name is ${name} and your email is: ${email}`;
}

console.log(printName("Marcel"));
