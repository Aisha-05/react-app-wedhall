import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Topbar.css";

function Topbar({ owner }) {
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const avatarRef = useRef(null);
  const firstName = owner.fullName.split(" ")[0];
  const navigate = useNavigate();

  useEffect(() => {
    const handleOutside = (e) => {
      if (
        navRef.current && !navRef.current.contains(e.target) &&
        avatarRef.current && !avatarRef.current.contains(e.target)
      ) {
        setShowNav(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") setShowNav(false);
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [navRef, avatarRef]);

  const handleLogout = () => {
    // Here you can also clear any stored session/token if needed
    navigate("/"); // redirect to home or login page
  };

  return (
    <>
      <header className="topbar">
        <div className="topbar-left">
          <div className="logo"><Link to="/">WedHall</Link></div>
        </div>
        <div className="topbar-right">
          <nav ref={navRef} className={`topbar-navbar ${showNav ? 'open' : ''}`} aria-hidden={!showNav && window.innerWidth < 769}>
            <div className="topbar-nav-item"><Link to="/">Home</Link></div>
            <div className="topbar-nav-item"><Link to="/profile">Profile</Link></div>
            <div className="topbar-nav-item"><Link to="/requests">Requests</Link></div>
            <div className="topbar-nav-item"><Link to="/history">History</Link></div>
            <div className="topbar-nav-item topbar-logout-btn" onClick={() => setShowLogoutConfirm(true)}>
              Log Out
            </div>
          </nav>

          <div
            className="topbar-user-area"
            ref={avatarRef}
            role="button"
            tabIndex={0}
            aria-haspopup="true"
            aria-expanded={showNav}
            onClick={() => setShowNav((s) => !s)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowNav((s) => !s); }}
          >
            <img src={owner.picture} alt="Owner" className="topbar-img" />
            <div className="topbar-user-text">
              <h4>{firstName}</h4>
              <p>Owner</p>
            </div>
          </div>
        </div>
      </header>

      {/* === Logout Confirmation Popup === */}
      {showLogoutConfirm && (
        <div className="topbar-logout-overlay">
          <div className="topbar-logout-box">
            <h4>Confirm Logout</h4>
            <p>Are you sure you want to log out, <strong>{firstName}</strong>?</p>
            <div className="topbar-logout-buttons">
              <button className="yes" onClick={handleLogout}>Yes, Log Out</button>
              <button className="no" onClick={() => setShowLogoutConfirm(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Topbar;
