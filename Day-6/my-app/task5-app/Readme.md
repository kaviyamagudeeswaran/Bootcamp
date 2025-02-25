### ✅ What You Learned  
By implementing **Data Persistence with a File**, you learned:  
- How to **store and manage data** in a JSON file instead of a hardcoded array.  
- How to perform **CRUD operations (Create, Read, Update, Delete)** using file-based storage.  
- How to test **CRUD operations** using **Postman**.  

---

### 📌 **Summary of Implementation**  
We replaced the hardcoded array with a **users.json file** and implemented the following **CRUD operations**:  

1️⃣ **Create (POST `/users`)** – Adds a new user to the JSON file.  
2️⃣ **Read (GET `/users`)** – Fetches all users from the JSON file.  
3️⃣ **Read One (GET `/users/:id`)** – Retrieves a user by ID.  
4️⃣ **Update (PUT `/users/:id`)** – Updates user details in the JSON file.  
5️⃣ **Delete (DELETE `/users/:id`)** – Removes a user from the JSON file.  

---

### 🔥 **API Testing with Postman**  
- **POST `/users`** → Send a JSON body `{ "id": 4, "name": "Kaviya" }` to add a user.  
- **GET `/users`** → Retrieve all users from the JSON file.  
- **GET `/users/2`** → Get details of user with ID 2.  
- **PUT `/users/2`** → Send `{ "name": "Updated Name" }` to update user 2.  
- **DELETE `/users/2`** → Remove user with ID 2.  

