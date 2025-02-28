import "../styles/studentName.css"; // Import CSS file

const StudentName = ({ name }) => {
  return <div className="student-name">Student Name: {name}</div>;
};

export default StudentName;
