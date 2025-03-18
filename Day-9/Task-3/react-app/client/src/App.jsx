import React from "react";
import StudentList from "./components/StudentList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

function App() {
  return (
    <div className="app-container">
      <h1 className="text-center mt-4">Student Management</h1>
      <StudentList />
    </div>
  );
}

export default App;
