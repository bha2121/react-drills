import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state = {
      newArr: ['swag', 'bag', 'dag', 'sag', 'gag', 'rag']
    }
  }


  arrToDisplay(){
    let displayArr = this.state.newArr.map((el)=>{
      return <h2 key={el}>{el}</h2>

    })
    return displayArr

  }


  render() {
    return (
      <div className="App">
        {this.arrToDisplay()}
      </div>
    );
  }
}

export default App;
