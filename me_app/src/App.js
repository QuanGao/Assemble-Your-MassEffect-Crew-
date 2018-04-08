import React, { Component } from 'react';
// import logo from './logo.svg';

import Wrapper from "./components/Wrapper";
import ClickItem from "./components/ClickItem";
// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import members from "./members.json";

import './App.css';

class App extends Component {
    state = {
        members: members,
        correctGuess: []
    };

    // record = 0;

    guess = id => {
        if(this.state.correctGuess.indexOf(id)===-1){
            this.setState({
                correctGuess: this.state.correctGuess.concat(id),
                members: this.state.members.sort((a,b)=>{return Math.round(Math.random())===0? -1:1 })
            })
        }else{
            this.setState({
                correctGuess: [],
                // record: Math.max(this.state.record, this.state.correctGuess.length),
                members: this.state.members.sort((a,b)=>{return Math.round(Math.random())===0? -1:1 }),
            })
        }
    };

    render() {
        return (
            <Wrapper>
            
                {this.state.members.map(member=>(<ClickItem guess={this.guess} image={member.image} id={member.id} />))}                

            </Wrapper>
        )
    }
}


// var randomSorted = arr.sort((a,b)=>{return Math.round(Math.random())==0? -1:1 })
export default App;
