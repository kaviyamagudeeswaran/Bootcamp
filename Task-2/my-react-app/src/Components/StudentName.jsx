import "../styles/studentName.css"; // Import CSS

const StudentName = ({ name }) => {
  return <div className="student-name">Student Name: {name}</div>;
};

export default StudentName;
