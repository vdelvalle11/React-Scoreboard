import React, { Component } from 'react';
import './App.css';
const players = [
  {
    name: "Victor",
    score: 50,
    id: 1
  },
  {
    name: "Keannee",
    score: 30,
    id: 2
  },
  {
    name: "Angel",
    score: 14,
    id: 3
  },
  {
    name: "Michele",
    score: 83,
    id: 4
  },
]

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
        {props.name}
        </span>

        <Counter />
      </div>
    )
}

class Counter extends Component {
  state ={
    score: 0
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrementScore = () => {
    this.setState({
      score: this.state.score - 1
    });
  }

  render(){
    return (
        <div className = "counter">
          <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
          <span className="counter-score">{this.state.score}</span>
          <button className="counter-action increment" onClick={this.incrementScore}>+</button>
        </div>
    )
  }
}

const AppContent = (props) => {
  return (
    <div className="scoreboard">
      <Header title = "Scoreboard" totalPlayers = {players.length}/>

      {props.initialplayers.map( player =>
        <Player
          name={player.name}
          key={player.id.toString()}
        />
      )}
    </div>
  )
}

const App = () => {
    return (
      <AppContent initialplayers = {players}/>
    )
}

export default App;
