import React, { useState } from "react";
function ChangeName()
{
     const [user, setUser] = useState({
    name: "John",
    age: 25
  });

  const updateName = () => {
    setUser({...user, name: "Sudhan"});
  };
    return(
        <>
         <div className="p-5" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button
        onClick={updateName}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-3"
      >
        Update Name
      </button>
    </div>


        </>
    )
}
export default ChangeName