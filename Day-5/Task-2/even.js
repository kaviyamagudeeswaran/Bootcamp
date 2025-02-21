
const args = process.argv.slice(2);
if (args.length < 1) {
  console.log("Please provide a number as an argument.");
  process.exit(1);
}
const num = parseInt(args[0], 10);
if (isNaN(num)) {
  console.log("Please enter a valid number.");
  process.exit(1);
}
console.log(num % 2 === 0 ? "Even" : "Odd");
