const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2); // Get command-line arguments after "node my-tool.js"
const command = args[0]; // First argument is the command
const fileName = args[1]; // Second argument is the file name (if provided)

const filePath = path.join(__dirname, fileName || ""); // Construct full file path

// Function to create a file
function createFile() {
  if (!fileName) {
    console.log("❌ Please provide a filename.");
    return;
  }
  fs.writeFileSync(filePath, "This is a new file.", "utf8");
  console.log(`✅ File '${fileName}' created successfully.`);
}

// Function to delete a file
function deleteFile() {
  if (!fileName) {
    console.log("❌ Please provide a filename.");
    return;
  }
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    console.log(`🗑️ File '${fileName}' deleted successfully.`);
  } else {
    console.log("❌ File not found.");
  }
}

// Function to read a file
function readFile() {
  if (!fileName) {
    console.log("❌ Please provide a filename.");
    return;
  }
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf8");
    console.log(`📖 File Content:\n${content}`);
  } else {
    console.log("❌ File not found.");
  }
}

// Switch statement to handle different commands
switch (command) {
  case "create":
    createFile();
    break;
  case "delete":
    deleteFile();
    break;
  case "read":
    readFile();
    break;
  default:
    console.log(
      "❌ Invalid command. Use 'create <filename>', 'delete <filename>', or 'read <filename>'."
    );
}
