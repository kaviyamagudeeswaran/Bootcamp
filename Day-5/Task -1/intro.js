
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Please provide two numbers as arguments.");
  process.exit(1);
}
const num1 = parseInt(args[0], 10);
const num2 = parseInt(args[1], 10);
if (isNaN(num1) || isNaN(num2)) {
  console.log("Both arguments must be valid numbers.");
  process.exit(1);
}
const sum= num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
const sub = num1 -num2;
console.log(`The sub of ${num1} and ${num2} is ${sub}.`);
const mul = num1 * num2;
console.log(`The mul of ${num1} and ${num2} is ${mul}.`);
const div = num1 / num2;
console.log(`The div of ${num1} and ${num2} is ${div}.`);

