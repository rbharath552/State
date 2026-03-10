import React from "react";

function EmployeeCard({ employees }) {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {employees.map((emp, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "15px",
            borderRadius: "8px",
            width: "200px"
          }}
        >
          <h3>{emp.name}</h3>
          <p><b>Role:</b> {emp.role}</p>
          <p><b>Location:</b> {emp.location}</p>
        </div>
      ))}
    </div>
  );
}
export default EmployeeCard;