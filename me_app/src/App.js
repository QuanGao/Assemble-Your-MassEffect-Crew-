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
    shuffleArr = arr => arr.sort((a,b)=>{return Math.round(Math.random())===0? -1:1 });
    guess = id => {
        if(this.correctGuess.indexOf(id)===-1){
            this.score++;
            this.record = Math.max(this.record, this.score);
            this.correctGuess.push(id)
        }else{
            this.score = 0;
            this.correctGuess = [];
        }
        this.setState({
            members: this.shuffleArr(this.state.members)
        })
    };

    render() {
        return (
            <Wrapper>
                <Navbar score={this.score} record={this.record}/>
                <Playzone>            
                    {this.state.members.map(member=>(<ClickItem guess={this.guess} image={member.image} id={member.id} />))}                
                </Playzone>
            </Wrapper>
        )
    }
}


export default App;
