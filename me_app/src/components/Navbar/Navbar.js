import React from "react";
import "./Navbar.css";

const listStyle = {
    margin: "10px",
    padding: "10px"
}

const Navbar = (props) => {
    return (
        <div className="container-fluid scoreboard">
            <ul style={listStyle} className="row">
                <li className="restart col-md-2">Start New</li>
                <li className="info col-md-6">Click a crew member to begin!</li>
                <li className="score col-md-4">Score: {props.score} | Top Score: {props.record}</li>    
            </ul>
        </div>
  
  )
}
export default Navbar;

// {/* <nav classNameName="scoreboard container-fluid navbar-expand-lg navbar-dark">
// <ul classNameName="navbar-nav">      
//     <li><a classNameName="navbar-brand" href="/">Start New</a></li>
//     <li><span>Click an image to begin!</span></li>
//     <li><span>Score: 0 | Top Score: 0</span></li>        
// </ul>
// </nav>   */}