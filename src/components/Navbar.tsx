import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar">
      <nav className={`navbar ${scrolling ? "scrolling" : ""}`}>
        <ul className="navbar-menu-left">
          <li>Home</li>
          <li>Menu</li>
          <li>Booking</li>
        </ul>
        <div className="navbar-logo">
          <img src="logo.png" alt="Logo" className="logo" />
        </div>
        <ul className="navbar-menu-right">
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      {/* <div className="menulist">
        <div className="menulink">
          <p>Home</p>
        </div>
        <div className="menulink">
          <p>Menu</p>
        </div>
        <div className="menulink">
          <p>Booking</p>
        </div>
        <div className="menulink">
          <p>About</p>
        </div>
        <div className="menulink">
          <p>Blog</p>
        </div>
        <div className="menulink">
          <p>Contact</p>
        </div>
      </div> */}
    </div>
  );
};
