import React, { useState } from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([
    {
      name: "Kaviya",
      major: "Computer Science",
      year: "Freshman",
      image: "Kaviya.jpg",
    },
    {
      name: "Visalachi",
      major: "Mechanical Engineering",
      year: "Sophomore",
      image: "Visalachi.jpg",
    },
    {
      name: "Niranjan",
      major: "Business Administration",
      year: "Junior",
      image: "Niranjan.jpg",
    },
    {
      name: "Dinesh",
      major: "Psychology",
      year: "Senior",
      image: "Dinesh.jpg",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newStudent, setNewStudent] = useState({
    name: "",
    major: "",
    year: "",
  });
  

  // Handle Search
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Add Student
  const handleAddStudent = () => {
    if (newStudent.name && newStudent.major && newStudent.year) {
      setStudents([
        ...students,
        { ...newStudent, image: "/images/default.jpg" },
      ]);
      setNewStudent({ name: "", major: "", year: "" }); // Reset form
    }
  };

  // Handle Remove Student
  const handleRemoveStudent = (name) => {
    setStudents(students.filter((student) => student.name !== name));
  };

  return (
    <div className="student-list">
      <h1>Student List</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search student..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Add Student Form */}
      <div className="add-student-form">
        <input
          type="text"
          placeholder="Name"
          value={newStudent.name}
          onChange={(e) =>
            setNewStudent({ ...newStudent, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Major"
          value={newStudent.major}
          onChange={(e) =>
            setNewStudent({ ...newStudent, major: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Year"
          value={newStudent.year}
          onChange={(e) =>
            setNewStudent({ ...newStudent, year: e.target.value })
          }
        />
        <button onClick={handleAddStudent}>Add Student</button>
      </div>

      {/* Student List */}
      <div className="cards-container">
        {filteredStudents.map((student, index) => (
          <StudentCard
            key={index}
            {...student}
            onRemove={() => handleRemoveStudent(student.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
