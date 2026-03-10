import React from "react";

function StudentList({ students }) {
  return (
    <div>
      <h2>Student Results</h2>

      {students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Marks: {student.marks}</p>
          <p>
            Result: {student.marks >= 40 ? "Pass" : "Fail"}
          </p>
          <hr />
        </div>
      ))}

    </div>
  );
}
export default StudentList;