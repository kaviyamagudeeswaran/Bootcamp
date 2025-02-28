import StudentName from "./components/StudentName";
import "./styles/studentName.css"; // Import global styles if needed

function App() {
  return (
    <div className="student-container">
      <StudentName name="Kaviya" />
    </div>
  );
}

export default App;
