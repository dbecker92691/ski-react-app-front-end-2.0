import React, { Component } from 'react';
import './App.css';
import Login from "./Login/Login";
import Main from "./Main/Main";

class App extends Component {
  constructor(){
    super();
    this.state = {
      currentUser: {
        "username": ""
      },
      loggedIn: false,
      error: ""
    }
  }

  handleLogin = async (formData) => {

    const newLoginUser = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_LOGIN}/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if(newLoginUser.status === 200){
      const newUserResponse = await newLoginUser.json();

      this.setState({
        currentUser: newUserResponse,
        loggedIn: true,
        error: ""
      });

      console.log("successful login");
    }else{
      this.setState({
        error: "Invalid login credentails"
      });

      console.log(this.state.error);
    }
  }

  handleRegister = async (formData) => {
    const newRegisterUser = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_LOGIN}/register`, {
      method: "POST",
      credentails: "include",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });
    
    const newRegisterUserResponse = await newRegisterUser.json();

    if(newRegisterUser.status === 200){
      this.setState({
        currentUser: newRegisterUserResponse,
        loggedIn: true,
        error: ""
      })
      console.log("successful register");
    }else{
      this.setState({
        error: "Invalid register"
      })

      console.log(this.state.error);
    }

  }

  render() {
    return (
      <div className="App">
        {
          this.state.loggedIn ?
          <Main currentUser={this.state.currentUser}/> :
          <Login handleLogin={this.handleLogin} handleRegister={this.handleRegister} />

        }
      </div>
    );
  }
}

export default App;
