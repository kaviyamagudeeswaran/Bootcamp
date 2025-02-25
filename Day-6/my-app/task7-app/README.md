
What I Learned
By implementing Error Handling:

How to catch invalid requests and return proper HTTP status codes.
How to handle missing resources with a 404 Not Found response.
How to catch server errors and return a 500 Internal Server Error response.
How to use try-catch blocks and middleware for error handling.
How to test error cases using Postman.


📌 Summary of Implementation
We added error handling to all endpoints to ensure:
✅ Invalid Input → Returns 400 Bad Request with a descriptive error message.
✅ User Not Found → Returns 404 Not Found if the requested user ID doesn’t exist.
✅ Internal Server Errors → Returns 500 Internal Server Error if something goes wrong.

All errors are returned in JSON format for better API consistency.
