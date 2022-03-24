import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import countryData from "./countryData";
import './style.css';

function App() {
  const cardComponents = countryData.map(card => (
    <Card
      key={card.id}
      item={card}
    />
  ));
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cardComponents}</section>
    </div>
  );
}

export default App;