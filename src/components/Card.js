import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.item.image} alt={props.item.title} />
      </div>
      <br></br>
      <div className="card-content">
        <p>
        <span id="location-logo" class="material-icons-outlined">location_on</span>
        <span className="location-name">{props.item.location}</span> <a href={props.item.googleMapsUrl}>View on Google Maps
        </a></p>
        <h3>{props.item.title}</h3>
        <p>{props.item.startDate} - {props.item.endDate}</p>  
        <p className="card-description">{props.item.description}</p>
      </div>
    </div>
  );
}

export default Card;