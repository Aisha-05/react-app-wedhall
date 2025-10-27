import React, { useState } from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from "../Components/Topbar";
import OwnerProfileCard from "../Components/OwnerProfileCard";
import StatsWidgets from "../Components/StatsWidgets";
import HallList from "../Components/HallList";
// import Rating from "./Components/Rating";
import ProfilePopup from "../Components/ProfilePopUp";

function Dashboard({owner, setOwner}){

  const statsData = {
    rating: 4.2,
    reviewsCount: 145,
    stats: {
      totalCustomers: 5423,
      newCustomers: 3,
      totalHalls: 189,
      newHalls: 1,
      mostBookedCount: 41,
      mostBookedName: "Layalina",
    },
  };
  const [isEditing, setIsEditing] = useState(false);

  const halls = [
    {
      id: 1,
      name: "Layalina",
      location: "Bejaia",
      price: "1,000 DZD",
      rating: 5,
      description:
        "Un lieu raffiné et chaleureux pour célébrer l'amour et créer des souvenirs inoubliables.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoDQrg-pp9HyTJQhhGWfBj4NarwGvhzd5YA&s",
    },
    {
      id: 2,
      name: "El Bahia",
      location: "Alger",
      price: "1,200 DZD",
      rating: 4.5,
      description:
        "Un espace élégant au cœur d'Alger, parfait pour des cérémonies modernes et romantiques.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRroEznKZFiBg5K6Y4U6EYYHwxIhw9L4sKnEg&s",
    },
    {
      id: 3,
      name: "Palais des Fêtes",
      location: "Tizi Ouzou",
      price: "900 DZD",
      rating: 4.8,
      description:
        "Un lieu spacieux et décoré avec goût, idéal pour les grandes célébrations de mariage.",
      image:
        "https://media.3ersi.com/api/images/id/80d91758-48e4-4f37-8126-416f4410a50c",
    },
    {
      id: 4,
      name: "Le Rêve d’Or",
      location: "Oran",
      price: "1,500 DZD",
      rating: 5,
      description:
        "Une salle prestigieuse avec un service haut de gamme et une ambiance féerique.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa3HJ67YQ2F-RC04EvSn_F3rOJE_a0GuiVcQ&s",
    },
  ];

  return (
    <div className="app-container">
      <Topbar owner={owner} />
      <div className="dashboard">
        <div className="Owner-section">
          <OwnerProfileCard owner={owner} onEdit={() => setIsEditing(true)} />
        </div>

        <div className="section-two">
          <HallList halls={halls} limit={4}/>
        </div>
        <div className="stats-section">
          
          <StatsWidgets {...statsData}/>
        </div>
      </div>
      {isEditing && (
        <ProfilePopup
          owner={owner}
          setOwner={setOwner}
          onClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default Dashboard;