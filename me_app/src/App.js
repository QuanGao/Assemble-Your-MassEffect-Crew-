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
        members: members,
        messageColor: ""
    };
    correctGuess = [];
    record = 0;
    score = 0;

    ;

    message = "Click a crew member to begin!";
    shuffleArr = arr => arr.sort((a,b)=>{return Math.round(Math.random())===0? -1:1 });
    guess = id => {
        if(this.correctGuess.indexOf(id)===-1){

     
            this.setState({messageColor:"#3bff65"})
            setTimeout(()=>this.setState({messageColor:""}),500)

            this.score++;
            this.record = Math.max(this.record, this.score);
            this.correctGuess.push(id);
            this.message = "You guessed correctly!"
        }else{
            
            this.setState({messageColor:"#f44336"})
            setTimeout(()=>this.setState({messageColor:""}),500)

            this.score = 0;
            this.correctGuess = [];
            this.message = "You guessed incorrectly!"
        }
        this.setState({
            members: this.shuffleArr(this.state.members)
        })
    };
    reset = ()=>{
        this.score = 0;
        this.record = 0;
        this.correctGuess = [];
        this.setState({
            members: this.shuffleArr(this.state.members)
        })

    }
    render() {
        return (
            <Wrapper>
                
                <Navbar reset={this.reset} messageColor={this.state.messageColor} score={this.score} record={this.record} message={this.message}/>

                <Playzone>            
                    {this.state.members.map(member=>(<ClickItem key={member.name} guess={this.guess} image={member.image} id={member.id} />))}                
                </Playzone>
            </Wrapper>
        )
    }
}


export default App;
