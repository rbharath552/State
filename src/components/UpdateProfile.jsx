import { useState } from "react";

function UpdateProfile()
{
     const [employee, setEmployee] = useState({
    name: "Priya",
    role: "Developer",
    experience: 2
  });

  const promoteEmployee = () => {
    setEmployee({
      ...employee,
      role: "Senior Developer",
      experience: employee.experience + 1
    });
  };
  return(
        <>
          <div className="p-5" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Name: {employee.name}</h2>
      <h2>Role: {employee.role}</h2>
      <h2>Experience: {employee.experience} years</h2>

      <button
        onClick={promoteEmployee}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3">
        Update Profile
      </button>
    </div>

        
        </>
    )
}

export default UpdateProfile