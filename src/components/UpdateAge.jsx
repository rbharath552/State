import { useState } from "react";

function UpdateAge()
{
     const [person, setPerson] = useState({
    name: "Ravi",
    age: 22,
    city: "Chennai"
  });

  const increaseAge = () => {
    setPerson({ ...person,age: person.age + 1});
  };
    return(
        <>
         <div className="p-5" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Name: {person.name}</h2>
      <h2>Age: {person.age}</h2>
      <h2>City: {person.city}</h2>

      <button
        onClick={increaseAge}
        className="bg-green-500 text-white px-4 py-2 rounded mt-3"
      >
        Increase Age
      </button>
    </div>

        
        </>
    )
}
export default UpdateAge