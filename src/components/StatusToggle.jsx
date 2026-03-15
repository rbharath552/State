import React, { useState } from "react";

function StatusToggle() {
  const [status, setStatus] = useState(true);

  const toggleStatus = () => {
    setStatus(!status);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Status: {status ? "Online" : "Offline"}</h1>

      <button onClick={toggleStatus}>
        Toggle Status
      </button>
    </div>
  );
}
export default StatusToggle;