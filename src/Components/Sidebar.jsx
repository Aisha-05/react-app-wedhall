import React from 'react'
import '../App.css'
function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo"><a>WedHall</a></div>
        <div className="menu">
            <ul>
                <li><a href="#"><i></i>My Profile</a></li>
                <li><a href="#"><i></i>Requests</a></li>
                <li><a href="#"><i></i>My Halls</a></li>
                <li><a href="#"><i></i>History</a></li>
            </ul>
        </div>
        <div className="log-out">Log out</div>
    </div>
  )
}

export default Sidebar
