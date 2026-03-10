import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeContainer() {

  const employees = [
    { name: "Raj", role: "Frontend Developer", location: "Chennai" },
    { name: "Bharath", role: "Backend Developer", location: "Bangalore" },
    { name: "Rahul", role: "UI Designer", location: "Hyderabad" }
  ];

  return (
    <div>
      <h2>Employee Profiles</h2>
      <EmployeeCard employees={employees} />
    </div>
  );
}

export default EmployeeContainer;