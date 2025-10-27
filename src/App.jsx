import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RequestsHistory from "./pages/RequestsHistory";
import profilePic from "./images/profilepic.jpg";

function App() {
  const [owner, setOwner] = useState({
    fullName: "Sophie Bennett",
    email: "sophie.bennett@gmail.com",
    wilaya: "Algiers",
    phoneNum: "0546789843",
    picture: profilePic,
    rating: 4.5,
  });

  return (
      <Routes>
        <Route path="/profile" element={<Dashboard owner={owner} />} />
        <Route path="/" element={<Dashboard owner={owner} setOwner={setOwner}/>} />
        <Route path="/requests" element={<RequestsHistory owner={owner} />} />
      </Routes>
  );
}

export default App;
