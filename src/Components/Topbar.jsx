import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Topbar({ owner }) {
  const firstName = owner.fullName.split(" ")[0];

  return (
    <header className="topbar">
        <div className="topbar-left">
            <div className="logo"><a href="#">WedHall</a></div>
        </div>

        <div className="topbar-right">
            <nav className="navbar">
                <div className="nav-item"><Link to ={"../pages/RequestsHistory.jsx"}>Requests & History</Link> </div>
                <div className="nav-item"><a href="#">Log Out</a></div>
            </nav>
            <div className="user-area">
                <img src={owner.picture} alt="Owner" className="topbar-img" />
                <div className="user-text">
                    <h4>{firstName}</h4>
                    <p>Owner</p>
                </div>
            </div>
        </div>
    </header>
  );
}

export default Topbar;
