import React from 'react';
import { Link } from 'react-router-dom';

export default function Eventcard({ event }) {
  return (
    <div className="card mb-4">
      <img src={event.image} className="card-img-top" alt={event.name} style={{height:'250px'}}/>
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">{event.dateTime}</p>
        <Link to={`/eventdetail/${event.id}`} className="btn btn-outline-primary">View Details</Link>
      </div>
    </div>
  );
}