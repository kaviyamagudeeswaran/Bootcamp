
const inputString = process.argv[2];
if (!inputString) {
  console.log("Please provide a string as a command-line argument.");
  process.exit(1);
}
const reversedString = inputString.split("").reverse().join("");
console.log(reversedString);
