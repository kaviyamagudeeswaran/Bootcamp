
✅ What I Learned
By implementing Input Validation, you learned:

How to validate incoming POST request data.
How to ensure required fields (id, name) are present.
How to check data types (e.g., id is a number, name is a string).
How to return meaningful error messages when validation fails.
How to test validation rules using Postman.
📌 Summary of Implementation
We added input validation to the POST /users endpoint to ensure:
✅ id must be a number
✅ name must be a string
✅ Both fields must be present

If validation fails, the API returns a 400 Bad Request response with an appropriate error message.

