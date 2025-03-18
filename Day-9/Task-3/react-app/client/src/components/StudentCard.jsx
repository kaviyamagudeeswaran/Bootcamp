import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styles/StudentCard.css";

const StudentCard = ({ name, id, major, email, year }) => {
  return (
    <div className="card text-center shadow-lg bg-light border-primary">
      <div className="card-body">
        <h5 className="card-title text-primary">{name}</h5>
        <p className="card-text">
          <strong className="text-dark">Major:</strong> {major}
        </p>
        <p className="card-text">
          <strong className="text-secondary">ID:</strong> {id}
        </p>
        <p className="card-text">
          <strong className="text-danger">Email:</strong> {email}
        </p>
        <p className="card-text">
          <strong className="text-success">Year:</strong> {year}
        </p>
      </div>
    </div>
  );
};

export default StudentCard;
