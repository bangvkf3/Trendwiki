import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <section className="nav-container">
      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/Trend1">Trend1</Link>
        <Link to="/Trend2">Trend2</Link>
        <Link to="/Trend3">Trend3</Link>
        <Link to="/Trend4">Trend4</Link>
        <Link to="/Trend5">Trend5</Link>
        <Link to="/Trend6">Trend6</Link>
        <Link to="/Trend7">Trend7</Link>
        <Link to="/Trend8">Trend8</Link>
        <Link to="/Trend9">Trend9</Link>
        <Link to="/Trend10">Trend10</Link>
      </div>
    </section>
  );
}

export default Navigation;
