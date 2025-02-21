const fs = require("fs");
const path = require("path");

function traverseDirectory(dirPath, depth = 0) {
  try {
    const items = fs.readdirSync(dirPath); // Read directory contents

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stats = fs.statSync(fullPath);
      const indent = " ".repeat(depth * 2); // Indentation for better visibility

      if (stats.isDirectory()) {
        console.log(`${indent}📁 [DIR] ${item}`);
        traverseDirectory(fullPath, depth + 1); // Recursively traverse subdirectory
      } else {
        console.log(`${indent}📄 [FILE] ${item}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error reading directory: ${error.message}`);
  }
}

// Get directory from command line argument
const directoryPath = process.argv[2];

if (!directoryPath) {
  console.log("❌ Please provide a directory path to traverse.");
  process.exit(1);
}

console.log(`🔍 Traversing: ${directoryPath}`);
traverseDirectory(directoryPath);
