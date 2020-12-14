import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header__title">
          <h1>📝 Trend Wiki</h1>
        </div>
        <div className="header__info">
          <h3>🖥202R - Deep Learning</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
