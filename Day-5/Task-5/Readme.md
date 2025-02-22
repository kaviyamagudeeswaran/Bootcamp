
# **📂 File Statistics**  

## **📚 What I Learned:**  
- 🖥️ How to accept a file path as a command-line argument in a script.  
- 📜 Using the `fs` module in Node.js to retrieve file information.  
- 🗂️ Extracting file size, creation date, and last modified date.  

## **🛠️ Implementation:**  
- 📥 Retrieved the file path from `process.argv`.  
- 📁 Used `fs.stat()` to get file details asynchronously.  
- 📏 Extracted and displayed the file size in bytes.  
- 📆 Retrieved and printed the creation and last modified dates.  
- 🚨 Included error handling for invalid file paths or missing files.  

## **🔍 Additional Exploration:**  
- ❗ Used `fs.existsSync()` to check if the file exists before processing.  
