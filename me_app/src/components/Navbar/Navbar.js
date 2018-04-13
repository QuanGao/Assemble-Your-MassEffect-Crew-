import React, { Component }  from "react";
import "./Navbar.css";

const listStyle = {
    margin: "10px",
    padding: "10px"
}

const Navbar = (props) => {
    return (
        <div className="container-fluid scoreboard">
            <ul style={listStyle} className="row">
                <li className="restart col-md-2" onClick={props.reset} >Restart</li>
                <li className="message col-md-6" style={{color:props.messageColor}}>{props.message}</li>
                <li className="score col-md-4">Score: {props.score} | Top Score: {props.record}</li>    
            </ul>
        </div>
    )
}
export default Navbar;
