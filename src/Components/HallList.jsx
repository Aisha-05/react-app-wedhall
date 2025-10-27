import React, { useState } from "react";
import { Link } from "react-router-dom";
import OneHall from "./OneHall";
import "./HallList.css";

function HallsList({ halls = [], setHalls, limit = 4 }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });

  const limitedHalls = halls.slice(0, limit);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.location) return;

    const newHall = {
      id: Date.now(),
      ...formData,
      rating: 0, // clients rate later
    };

    setHalls([...halls, newHall]);
    setShowForm(false);
    setFormData({ name: "", location: "", price: "", description: "", image: "" });
  };

  return (
    <div className="halls-section">
      <div className="section-header">
        <h2>My Halls</h2>
        {halls.length > 4 && (
          <Link to="/halls" className="see-all">
            See All
          </Link>
        )}
      </div>

      <div className="halls-container">
        {limitedHalls.map((hall) => (
          <OneHall key={hall.id} hall={hall} />
        ))}

        <div className="add-hall-box" onClick={() => setShowForm(true)}>
          <span className="add-hall-link">+ Add New Hall</span>
        </div>
      </div>

      {/* === Popup Overlay === */}
      {showForm && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Add New Hall</h2>

            <form onSubmit={handleSubmit} className="popup-form">
              <label>Hall Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="e.g. La Belle Étoile"
              />

              <label>Location</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
                placeholder="e.g. Algiers, Hydra"
              />

              <label>Price</label>
              <input
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="e.g. 1500 DZD"
              />

              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="3"
                placeholder="Brief description about the hall..."
              ></textarea>

              <label>Upload Image</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} />

              {formData.image && (
                <div className="image-preview">
                  <img src={formData.image} alt="Preview" />
                </div>
              )}

              <div className="popup-buttons">
                <button type="submit" className="save-btn">Save</button>
                <button type="button" className="cancel-btn" onClick={() => setShowForm(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default HallsList;
