
const inputNumber = Number(process.argv[2]);
if (isNaN(inputNumber)) {
  console.log("Please provide a valid number as a command-line argument.");
  process.exit(1);
}
let i = 1;
while (i <= 16) {
  console.log(`${inputNumber} x ${i} = ${inputNumber * i}`);
  i++; 
}
