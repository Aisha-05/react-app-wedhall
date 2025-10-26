import React from "react";
import Topbar from "../Components/Topbar";
import "../App.css";

function RequestsHistory({ owner }) {
  return (
    <div className="app-container">
      <Topbar owner={owner} />
      
      <div className="dashboard">
        <h2 style={{ color: "#825e39" }}>Requests & History</h2>
        <p>Here you can view all your booking requests and their history.</p>

        {/* later you can add a table or cards here */}
      </div>
    </div>
  );
}

export default RequestsHistory;
