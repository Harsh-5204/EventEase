import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Events from '../dummydata/Event';
import Bookingform from '../components/Bookingform';

export default function Eventdetailpage() {
  const { id } = useParams();
  const event = Events.find(e => e.id === parseInt(id));
  const navigate = useNavigate();

  if (!event) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger text-centger">
          Event not found
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        
        <div className="col-md-6">
          <img
            src={event.image}
            alt={event.name}
            className="img-fluid rounded w-100 responsive-img"
            style={{objectFit: 'fill' }}
          />
        </div>

     
        <div className="col-md-6">
          <h2 className="fw-bold text-primary mb-3">{event.name}</h2>
          <p className="mb-1">
            <strong>Date & Time:</strong><br />
            {event.dateTime}
          </p>
          <p className="mb-1">
            <strong>Description:</strong><br />
            {event.description}
          </p>
          <p className="mb-1">
            <strong>Venue:</strong><br />
            {event.venue}
          </p>
          <p className="mb-3">
            <strong>Tickets Available:</strong> {event.ticketsAvailable}
          </p>

          <div className="border-top pt-3">
            <h5 className="mb-3">Book Your Tickets</h5>
            <Bookingform />
          </div>

          <button
            className="btn btn-outline-secondary mt-4"
            onClick={() => navigate(-1)}
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
