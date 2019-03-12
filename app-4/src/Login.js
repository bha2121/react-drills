import React, { Component } from 'react'


class Login extends Component{
    constructor(){
        super()
        this.state={
            userInput: '',
            passwordinput: ''
        }
    }

handleUserInput(value){
    this.setState({
        userInput: value
    })
}

handlePasswordInput(value){
    this.setState({
        passwordinput: value
    })
}

handleButton(){
    alert(`Username: ${this.state.userInput} Password: ${this.state.passwordinput}`)
}








    render(){
        return(
            <div>
                <input onChange={(e)=> this.handleUserInput(e.target.value)}></input>
                <input onChange={(e)=> this.handlePasswordInput(e.target.value)}></input>
                <button onClick={()=> this.handleButton()}>Login</button>
            </div>
        )
    }


}

export default Login