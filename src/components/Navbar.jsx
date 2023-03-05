import { ReactComponent as Logo } from "../img/logo.svg";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [showNavigation, setShowNavigation] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        showNavigation
      ) {
        setShowNavigation(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarRef, showNavigation]);

  return (
    <nav>
      <div
        className="navbar-overlay"
        style={{ display: showNavigation ? "block" : "none" }}
      ></div>
      <Logo />
      <ul className="desktop-navigation">
        <li>About</li>
        <li>Discover</li>
        <li>Get Started</li>
      </ul>
      <button
        className="hamburger-menu"
        onClick={() => setShowNavigation(!showNavigation)}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      {showNavigation && (
        <ul className="mobile-navigation" ref={navbarRef}>
          <li>About</li>
          <li>Discover</li>
          <li>Get Started</li>
        </ul>
      )}
    </nav>
  );
}
