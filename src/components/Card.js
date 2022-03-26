import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="card-wrapper">
        <div id="center-card" className="card-body">
          <div className="card-image">
            <img src={props.item.image} alt={props.item.title} />
          </div>
          <br/>
          <div className="card-content">
            <p className="location-details">
            <span id="location-logo" class="material-icons-outlined">location_on</span>
            <span className="location-name">{props.item.location}</span> <a className="text-right" href={props.item.googleMapsUrl}>View on Google Maps
            </a></p>
            <h3>{props.item.title}</h3>
            <p className="date">{props.item.startDate} - {props.item.endDate}</p>  
            <p className="card-description">{props.item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;