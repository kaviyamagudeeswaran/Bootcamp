import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentCard from "./StudentCard";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/students")
      .then((response) => setStudents(response.data))
      .catch((error) => console.error("Error fetching students:", error));
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {students.length > 0 ? (
        students.map((student) => (
          <StudentCard
            key={student.id}
            name={student.name}
            id={student.id}
            email={student.email}
            major={student.major}
            year={student.year}
          />
        ))
      ) : (
        <p>Loading students...</p>
      )}
    </div>
  );
};

export default StudentList;
