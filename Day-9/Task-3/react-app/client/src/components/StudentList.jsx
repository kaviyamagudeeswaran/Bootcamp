import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import { fetchStudents } from "../api";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap
import "../styles/StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents().then(setStudents);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Student List</h2>
      <div className="row justify-content-center">
        {students.length > 0 ? (
          students.map((student) => (
            <div className="col-sm-6 col-md-4 col-lg-3 mb-3" key={student._id}>
              <StudentCard
                name={student.name}
                major={student.major}
                id={student._id}
                email={student.email}
                year={student.year}
              />
            </div>
          ))
        ) : (
          <p className="text-danger text-center">Loading students...</p>
        )}
      </div>
    </div>
  );
};

export default StudentList;
