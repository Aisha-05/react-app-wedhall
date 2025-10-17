import React, { useState } from 'react';
import Sidebar from './Components/Sidebar';
import Topbar from './Components/Topbar';
import ProfileBox from './Components/ProfileBox';
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [profile, setProfile] = useState({
    fullName: 'Alexa Rowies',
    phone: '+213 5688543',
    wilaya: 'Algiers',
    email: 'alexarowies@gmail.com'
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="grid-container">
      <Sidebar />
      <div className={`main-area ${isEditing ? '' : 'readonly'}`}>
        <Topbar profile={profile} />
        <ProfileBox
          profile={profile}
          setProfile={setProfile}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
