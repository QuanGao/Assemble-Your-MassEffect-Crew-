import React, { Component }  from "react";
import "./Navbar.css";

const listStyle = {
    margin: "10px",
    padding: "10px"
}

class Navbar extends Component {

    render(){
        return (
            <div className="container-fluid scoreboard">
                <ul style={listStyle} className="row">
                    <li className="restart col-md-2" onClick={this.props.reset} >Restart</li>
                    <li className="message col-md-6" style={{color:this.props.messageColor}}>{this.props.message}</li>
                    <li className="score col-md-4">Score: {this.props.score} | Top Score: {this.props.record}</li>    
                </ul>
            </div>
        )
    }
}
// const Navbar = (props) => {
//     return (
//         <div className="container-fluid scoreboard">
//             <ul style={listStyle} className="row">
//                 <li className="restart col-md-2">Start New</li>
//                 <li className="message col-md-6" style={
                
//                     }>{props.message}</li>
//                 <li className="score col-md-4">Score: {props.score} | Top Score: {props.record}</li>    
//             </ul>
//         </div>
  
//   )
// }
export default Navbar;
