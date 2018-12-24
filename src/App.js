import React, { Component } from 'react';
import './App.css';

const Header = (props) => {
    return (
      <header>
        <h1>{props.title}</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
      </header>
    )
}

const Player = (props) => {
    return (
      <div className = "player">
        <span classsName = "player-name">
        {props.playerName}
        </span>

        <Counter score = {props.score}/>
      </div>
    )
}

const Counter = (props) => {
    return (
        <div className = "counter">
          <button className="counter-action decrement">-</button>
          <span className="counter-score">{props.score}</span>
          <button className="counter-action increment">+</button>
        </div>
    )
}

const App = () => {
    return (
      <div className="scoreboard">
        <Header title = "Scoreboard" totalPlayers = {1}/>


        <Player playerName = "Victor" score="5"/>
      </div>
    );
}

export default App;
