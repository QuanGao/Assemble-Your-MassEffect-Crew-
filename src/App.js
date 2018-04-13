import React, { Component } from 'react';
import ClickItem from "./components/ClickItem";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import members from "./members.json";
import './App.css';

class App extends Component {
    state = {
        members: members.slice(0,4),
        messageColor: ""
    };
    correctGuess = [];
    record = 0;
    score = 0;
    message = "Click a crew member to begin!";
    level = 1;
    
    shuffleArr = arr => arr.sort((a,b)=>{return Math.round(Math.random())===0? -1:1 });

    guess = id => {
        if(this.correctGuess.indexOf(id)===-1){

            this.setState({messageColor:"#3bff65"})
            setTimeout(()=>this.setState({messageColor:""}),500)
            this.score++;
            this.record = Math.max(this.record, this.score);
            this.correctGuess.push(id);

            if(this.score < this.state.members.length){
                this.message = "You guessed correctly!";
                this.setState({
                    members: this.shuffleArr(this.state.members)
                })
            }else if(this.level===1){
                this.score = 0;
                this.correctGuess = [];
                this.level++;
                this.message = `You've won lvl 1! Now lvl ${this.level}`
                this.setState({
                    members: members.slice(0,8)
                })
            }else if(this.level===2){
                this.score = 0;
                this.correctGuess = [];
                this.level++;
                this.setState({
                    members: members.slice(0,12)
                })
                this.message = `You've won lvl 2! Now lvl ${this.level}`
            }else{
                this.message = "You've beat all the levels!"
            }
        }else{          
            this.setState({messageColor:"#f44336"})
            setTimeout(()=>this.setState({messageColor:""}),500)
            this.score = 0;
            this.correctGuess = [];
            this.message = "You guessed incorrectly!";
            this.setState({
                members: this.shuffleArr(this.state.members)
            })
        }
    };

    reset = ()=>{
        this.level = 1;
        this.score = 0;
        this.record = 0;
        this.correctGuess = [];
        this.message = "Starting Over!";
        this.setState({
            members: members.slice(0,4),
        })
    };

    render() {
        return (
            <div className="wrapper">
                <Navbar reset={this.reset} messageColor={this.state.messageColor} score={this.score} record={this.record} message={this.message}/>
                <Header/>
                <div className="playzone container-fluid">
                    {this.state.members.map(member=>(<ClickItem key={member.name} guess={this.guess} image={member.image} id={member.id} />))}                
                </div>          
            </div>
        )
    }
}

export default App;
