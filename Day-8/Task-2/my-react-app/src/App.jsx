import StudentName from "./Components/StudentName"; // ✅ Match exact casing

function App() {
  return (
    <div>
      {/* <Stud entName name="John Doe" /> */}
      <StudentName name="Kaviya" />
      <StudentName name="Thenmozhi" />
      <StudentName name="Gunamathi" />
      <StudentName name="Magudeeswaran" />
    </div>
  );
}

export default App;
