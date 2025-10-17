import React from "react";
import '../App.css'

function ProfileBox({ profile, setProfile, isEditing, setIsEditing }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Profile saved!");
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-box">
      <p>Welcome to your profile</p>
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-info">
            <img
              src="https://th.bing.com/th/id/R.1871862d87bb8037d953317fb4497189?rik=MBf1NyuchSQUtQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fProfile.png&ehk=Ouu2uMvvMPnkP1bdIY2BTAzbwhRoG9p03NUzbwGLhlg%3d&risl=&pid=ImgRaw&r=0"
              alt="Owner"
            />
            <div>
              <h3>{profile.fullName}</h3>
              <p>{profile.email}</p>
            </div>
          </div>

          {!isEditing ? (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
          ) : (
            <div className="edit-actions">
              <button className="save-btn" onClick={handleSave}>
                Save
              </button>
              <button className="cancel-btn" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          )}
        </div>

        <div className="profile-details">
          <div className="field">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="field">
            <label>Wilaya</label>
            <input
              type="text"
              name="wilaya"
              value={profile.wilaya}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
