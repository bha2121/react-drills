import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(){
    super()
    this.state= {
      foods: ['pizza', 'chicken', 'fries', 'pasta', 'nachos'],
      userInput: ''
    }
  }


onChange(value){
  this.setState({
    userInput: value
  })

}



foodsToDisplay(){
  let newArr = this.state.foods.filter((item)=>{
    return item.startsWith(this.state.userInput)
  }).map((ele)=>{
    return <h2>{ele}</h2>
  })
  return newArr
}



  render() {
    return (
      <div className="App">
        <input onChange={(e)=> this.onChange(e.target.value)}></input>
        {this.foodsToDisplay()}
      </div>
    );
  }
}

export default App;
