import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <br></br>
      <div className="card-content">
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
        <p>
          View on Google Maps: <a href={props.item.googleMapsUrl}>{props.item.title}</a>
        </p>
        <p>
          <span>{props.item.startDate}</span>
          <span>{props.item.endDate}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;