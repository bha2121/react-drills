import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state= {
      userInput: ''
    }
  }

  handleOnChange(input) {
    this.setState({
      userInput: input
    })
  }



  render() {
    return (
      <div className="App">
        <input onChange={(e)=> this.handleOnChange(e.target.value)}></input>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;
