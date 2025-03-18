import React from "react";
import StudentList from "./components/StudentList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
      <h1 className="text-3xl font-bold mb-5">Student Cards</h1>
      <StudentList />
    </div>
  );
};

export default App;
