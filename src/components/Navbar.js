import React, { useEffect, useState } from "react";
import "./Navbar.css";
function Navbar() {
  console.log(process.env.PUBLIC_UR);
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  });
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={process.env.PUBLIC_URL + "/images/netflix.png"}
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src={process.env.PUBLIC_URL + "/images/logo192.png"}
        alt="Netflix Logo"
      />
    </div>
  );
}
export default Navbar;
