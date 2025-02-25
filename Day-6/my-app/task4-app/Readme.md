### ✅ What I Learned  
By implementing this **POST Request Handling API**, you learned:  
- How to handle **POST requests** in **Express.js**.  
- How to use `express.json()` middleware to parse **JSON request bodies**.  
- How to **add new data** to a hardcoded array dynamically.  
- How to return a **confirmation response** after adding a user.  
- How to test **POST requests** using **Postman**.  

---

### 📌 **Summary of Implementation**  
We created a **POST API endpoint** at `/users` that accepts a **new user object** in the request body and adds it to a hardcoded array. The API then returns the updated user list as a response.  

#### 🔥 **API Testing with Postman**  
1️⃣ Start the server  
2️⃣ Send a **POST request** to `http://localhost:3000/users`  
3️⃣ In the **Body** tab, choose **raw** and set the format to **JSON**, then send:  
   ```json
   { "id": 4, "name": "David" }
   ```  
4️⃣ Receive a response confirming the user has been added  
5️⃣ Send a **GET request** to `/users` to verify the new user exists  
