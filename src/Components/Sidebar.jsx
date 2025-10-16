import React from 'react'
import '../App.css'
import { FaUser, FaListAlt, FaBuilding, FaHistory } from "react-icons/fa";
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo"><a>WedHall</a></div>
        <div className="menu">
            <ul>
              <li><a href="#"><FaUser /> My Profile</a></li>
              <li><a href="#"><FaListAlt /> Requests</a></li>
              <li><a href="#"><FaBuilding /> My Halls</a></li>
              <li><a href="#"><FaHistory /> History</a></li>
            </ul>
        </div>
        <div className="log-out">Log out</div>
    </div>
  )
}

export default Sidebar
