import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { RequestsProvider } from "./context/RequestsProvider";
import RequestsPage from "./pages/RequestsPage";
import HistoryPage from "./pages/HistoryPage";
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
    <RequestsProvider>
      <Routes>
        <Route path="/profile" element={<Dashboard owner={owner} setOwner={setOwner}/>} />
        <Route path="/" element={<Dashboard owner={owner} setOwner={setOwner}/>} /> 
        <Route path="/requests" element={<RequestsPage owner={owner} />} />
        <Route path="/history" element={<HistoryPage owner={owner} />} />
      </Routes>
      </RequestsProvider>
  );
}

export default App;
