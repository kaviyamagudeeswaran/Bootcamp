const fs = require("fs"); 
const path = require("path"); 
const filePath = process.argv[2];
if (!filePath) {
  console.log("❌ Please provide a file path.");
  process.exit(1);
}
const absolutePath = path.resolve(filePath);
console.log(`🔍 Checking file: ${absolutePath}`);
try {
  const stats = fs.statSync(absolutePath);
  console.log(`✅ File found: ${absolutePath}`);
  console.log(`📏 Size: ${stats.size} bytes`);
  console.log(`📅 Created: ${stats.birthtime}`);
  console.log(`📝 Last Modified: ${stats.mtime}`);
} catch (error) {
  console.error(`❌ Error reading file stats: ${error.message}`);
}
