import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="text-center bg-light py-5 animate-fade-in">
        <h1 className="display-4">Welcome to EventEase</h1>
        <p className="lead">
          Your one-stop platform to discover and book events.
        </p>
      </div>
    </>
  );
}
