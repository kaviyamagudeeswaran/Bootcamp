### ✅ What I Learned  
By implementing this **Parameterized Endpoint API**, you learned:  
- How to define **dynamic routes** in **Express.js** using parameters (`:id`).  
- How to extract **route parameters** from the request.  
- How to return a **specific user** based on the provided ID.  
- How to handle **non-existing users** with proper responses.  
- How to test API endpoints using **Postman** with dynamic parameters.  

---

### 📌 **Summary of Implementation**  
We created a **GET API endpoint** at `/users/:id`, where `:id` is a dynamic parameter. When a user requests `/users/2`, the API responds with the user having ID `2`. If the ID does not exist, an error message is returned.  

#### 🔥 **API Testing with Postman**  
1️⃣ Start the server  
2️⃣ Send a **GET request** to `http://localhost:3000/users/1`  
3️⃣ Receive a JSON response with the user details  
4️⃣ If an invalid ID is provided, the API returns an error message  

