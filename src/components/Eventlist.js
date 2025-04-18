import React from "react";
import Eventcard from "./Eventcard";

export default function Eventlist({ events }) {
  return (
    <div className="container my-5" id="events">
      <h2 className="mb-4 text-center">Upcoming Events</h2>
      <div className="row">
        {events.map((event) => {
          return (
            <>
              <div className=" col-sm-12 col-md-6 col-lg-4">
                <Eventcard event={event} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
