import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../HallList/HallList.css";

const AddHallModal = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
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
      rating: 0,
    };

    onSave(newHall);
  };

  // 🧠 Use React Portal to render outside other components
  return ReactDOM.createPortal(
    <div className="halllist-popup-overlay">
      <div className="halllist-popup-content">
        <h2>Add New Hall</h2>

        <form onSubmit={handleSubmit} className="halllist-popup-form">
          <label>Hall Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="e.g. La Belle Étoile"
          />

          <label>Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            placeholder="e.g. Algiers, Hydra"
          />

          <label>Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="e.g. 1500 DZD"
          />

          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            placeholder="Brief description about the hall..."
          ></textarea>

          <label>Upload Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />

          {formData.image && (
            <div className="halllist-image-preview">
              <img src={formData.image} alt="Preview" />
            </div>
          )}

          <div className="halllist-popup-buttons">
            <button type="submit" className="halllist-save-btn">Save</button>
            <button type="button" className="halllist-cancel-btn" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.body 
  );
};

export default AddHallModal;
