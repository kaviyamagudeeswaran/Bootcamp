
const users = [
  { name: "Kavi", age: 19 },
  { name: "Hari", age: 19 },
  { name: "Abi", age: 27},
  { name: "Dinesh", age: 25 },
  { name: "Raju", age: 26 },
];
const filteredUsers = users.filter(user => user.age > 25);
if (filteredUsers.length > 0) {
    console.log("Users older than 25:", filteredUsers);
} else {
    console.log("No users are older than 25.");
}
