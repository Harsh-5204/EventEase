import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Bookingform() {
  const [formData, setFormData] = useState({ name: "", email: "", tickets: 1 });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "tickets" ? parseInt(value) : value,
    }));
  };
  const select=[1,2,3,4,5];
  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking Successful!");
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <>
    <div className="animate-slide-in">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            required
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Number of Tickets</label>
          <select
            name="tickets"
            className="form-control"
            onChange={handleChange}
          >
            {select.map((num) => (
              <option>
                {num}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="mt-2 btn btn-outline-success">
          Book now
        </button>
      </form>

    </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}
