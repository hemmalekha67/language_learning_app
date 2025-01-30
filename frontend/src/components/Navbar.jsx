import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#4CAF50", 
    padding: "15px 20px"
  };

  const titleStyle = {
    color: "white",
    fontSize: "1.8em"
  };

  const navListStyle = {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0
  };

  const listItemStyle = {
    margin: "0 15px"
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.2em",
    transition: "color 0.3s ease"
  };

  return (
    <nav style={navbarStyle}>
      <h2 style={titleStyle}>LangLearn</h2>
      <ul style={navListStyle}>
        <li style={listItemStyle}><Link to="/home" style={linkStyle}>Home</Link></li>
        <li style={listItemStyle}><Link to="/lessons" style={linkStyle}>Lessons</Link></li>
        <li style={listItemStyle}><Link to="/quiz" style={linkStyle}>Quiz</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
