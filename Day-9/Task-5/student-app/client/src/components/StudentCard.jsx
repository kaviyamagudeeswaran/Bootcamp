
import React from "react";

const StudentCard = ({ name, id, email, major, year }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-5 m-3 w-80 border border-gray-200">
      <img
        src="https://via.placeholder.com/150"
        alt="Student"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h2 className="text-xl font-semibold mt-3">{name}</h2>
      <p className="text-gray-500">ID: {id}</p>
      <p className="text-gray-500">Email: {email || "Not available"}</p>
      <p className="text-gray-500">Major: {major || "Undeclared"}</p>
      <p className="text-gray-500">Year: {year || "Unknown"}</p>
    </div>
  );
};

export default StudentCard;
