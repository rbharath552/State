import React from "react";
import StudentList from "./StudentList";

function StudentContainer() {

  const students = [
    { name: "Arun", marks: 75 },
    { name: "Priya", marks: 35 },
    { name: "Rahul", marks: 50 },
    { name: "Anita", marks: 20 }
  ];

  return (
    <div>
      <StudentList students={students} />
    </div>
  );
}
export default StudentContainer;