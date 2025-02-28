import React from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  // Array of students
  const students = [
    { name: "Kaviya", major: "Computer Science", year: "Freshman" },
    { name: "Visalachi", major: "Mechanical Engineering", year: "Sophomore" },
    { name: "Niranjan", major: "Business Administration", year: "Junior" },
    { name: "Dinesh", major: "Psychology", year: "Senior" },
  ];

  return (
    <div className="student-list">
      <h1>Student List</h1>
      <div className="cards-container">
        {students.map((student, index) => (
          <StudentCard key={index} {...student} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
