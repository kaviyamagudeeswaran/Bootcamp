import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Import Bootstrap for styling
import "../styles/studentCard.css"; // ✅ Import custom CSS

const StudentCard = ({ name, major, year, image }) => {
  return (
    <div className="card student-card shadow-lg text-center">
      <img
        src={image} // ✅ Use image prop passed from App.jsx
        className="card-img-top student-img"
        alt={name}
      />
      <div className="card-body">
        <h3 className="card-title text-primary">{name}</h3>
        <p className="card-text">
          <strong>Major:</strong> {major}
        </p>
        <p className="card-text">
          <strong>Year:</strong> {year}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
