import React from 'react'
import '../App.css'

function Topbar({profile}) {

  const firstName = profile.fullName.split(" ")[0]; // get first word

  return (
    <div className="topbar">
      <div className="user-info">
        <img
          src="https://th.bing.com/th/id/R.1871862d87bb8037d953317fb4497189?rik=MBf1NyuchSQUtQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile.png&ehk=Ouu2uMvvMPnkP1bdIY2BTAzbwhRoG9p03NUzbwGLhlg%3d&risl=&pid=ImgRaw&r=0"
          alt="Profile"
          className="user-img"
        />
        <div>
          <h4>{firstName}</h4>
          <p>Owner</p>
        </div>
      </div>
    </div>
  )
}

export default Topbar
