import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import RequestsHistory from "./pages/RequestsHistory";
import profilePic from "./images/profilepic.jpg";
function App() {
  const [owner, setOwner] = useState({
    fullName: "Sophie Bennett",
    email: "sophie.bennett@gmail.com",
    wilaya: "Algiers",
    phoneNum: "0546789843",
    picture: profilePic,
  });

  const statsData = {
    rating: 4.2,
    reviewsCount: 145,
    stats: {
      totalCustomers: 5423,
      newCustomers: 3,
      totalHalls: 189,
      newHalls: 1,
      mostBookedCount: 41,
      mostBookedName: "Layalina",
    },
  };

  // const [isEditing, setIsEditing] = useState(false);

  return (
      <Routes>
        <Route path="/" element={<Dashboard owner={owner} />} />
        <Route path="/requests" element={<RequestsHistory owner={owner} />} />
      </Routes>
  );
}

export default App;
