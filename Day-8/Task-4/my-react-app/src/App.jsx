import React from "react";
import StudentCard from "./Components/StudentCard"; // ✅ Import StudentCard component
import "./styles/studentCard.css"; // ✅ Import styles

function App() {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <StudentCard
        name="Kaviya"
        major="Information Technology"
        year="2025"
        image="/images.jpeg" // ✅ Use direct public folder path
      />
    </div>
  );
}

export default App;
