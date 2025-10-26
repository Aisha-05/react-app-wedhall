// import React from "react";
// import "../App.css";

// function HallList() {
//   const halls = [
//     { name: "Layalina", city: "Bejaia", price: "1,000 DZD", img: "https://th.bing.com/th/id/OIP.layalina" },
//     { name: "Layalina", city: "Bejaia", price: "1,000 DZD", img: "https://th.bing.com/th/id/OIP.layalina" },
//     { name: "Layalina", city: "Bejaia", price: "1,000 DZD", img: "https://th.bing.com/th/id/OIP.layalina" },
//     { name: "Layalina", city: "Bejaia", price: "1,000 DZD", img: "https://th.bing.com/th/id/OIP.layalina" },
//   ];

//   return (
//     <div className="halls-section">
//       <h2>Halls</h2>
//       <div className="hall-list">
//         {halls.map((hall, index) => (
//           <div className="hall-card" key={index}>
//             <img src={hall.img} alt={hall.name} />
//             <h4>{hall.name}</h4>
//             <p>{hall.city}</p>
//             <p>{hall.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default HallList;


import React from 'react'
import OneHall from './OneHall'
import '../App.css'
const HallsList = ({isAuth,setIsAuth}) => {
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
  }
];
  return (
    <div className='halls-container'>
      {halls.map(hall=><OneHall hall={hall} isAuth={isAuth} setIsAuth={setIsAuth}/>)}
    </div>
  )
}

export default HallsList