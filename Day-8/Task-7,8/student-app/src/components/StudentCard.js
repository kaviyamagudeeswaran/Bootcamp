import React from "react";
import "../styles.css"; // Import CSS

const StudentCard = ({ name, major, year, image, onRemove }) => {
  // Define background colors based on student year
  const getBackgroundColor = (year) => {
    switch (year.toLowerCase()) {
      case "freshman":
        return "lightgreen";
      case "sophomore":
        return "yellow";
      case "junior":
        return "lightblue";
      case "senior":
        return "orange";
      default:
        return "gray"; // Default color for unknown years
    }
  };

  return (
    <div
      className="student-card"
      style={{ backgroundColor: getBackgroundColor(year) }}
    >
      {/* Display Student Image */}
      {image && <img src={image} alt={name} className="student-image" />}
      
      <h2>{name}</h2>
      <p>Major: {major}</p>
      <p>Year: {year}</p>

      {/* Remove Student Button */}
      <button className="remove-btn" onClick={onRemove}>Remove</button>
    </div>
  );
};

export default StudentCard;
