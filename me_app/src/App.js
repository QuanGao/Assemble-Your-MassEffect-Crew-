import React, { Component } from 'react';
// import logo from './logo.svg';
import Wrapper from "./components/Wrapper"
import Playzone from "./components/Playzone";
import ClickItem from "./components/ClickItem";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
import members from "./members.json";

import './App.css';

class App extends Component {
    state = {
        members: members
    };
    correctGuess = [];
    record = 0;
    score = 0;

    correctState = 0;

    message = "Click a crew member to begin!";
    shuffleArr = arr => arr.sort((a,b)=>{return Math.round(Math.random())===0? -1:1 });
    guess = id => {
        if(this.correctGuess.indexOf(id)===-1){

            this.correctState = 1;

            this.score++;
            this.record = Math.max(this.record, this.score);
            this.correctGuess.push(id);
            this.message = "You guessed correctly!"
        }else{

            this.correctState = -1;

            this.score = 0;
            this.correctGuess = [];
            this.message = "You guessed incorrectly!"
        }
        this.setState({
            members: this.shuffleArr(this.state.members)
        })
    };

    render() {
        return (
            <Wrapper>
                
                <Navbar correctState={this.correctState} score={this.score} record={this.record} message={this.message}/>

                <Playzone>            
                    {this.state.members.map(member=>(<ClickItem key={member.name} guess={this.guess} image={member.image} id={member.id} />))}                
                </Playzone>
            </Wrapper>
        )
    }
}


export default App;
