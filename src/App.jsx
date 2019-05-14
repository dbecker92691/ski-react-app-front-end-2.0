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
    console.log(formData, "<---- login form data");
    console.log(JSON.stringify(formData), "<----- stringified login form data");

    const newLoginUser = await fetch(`${process.env.HEROKU_REACT_APP_BACKEND_ADDRESS}/login`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(newLoginUser, "<--- login fetch request");

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

    console.log(formData, "<----- register form data");
    console.log(JSON.stringify(formData), "<----- strigified regiester form data");

    const newRegisterUser = await fetch(`${process.env.HEROKU_REACT_APP_BACKEND_ADDRESS}/register`, {
      method: "POST",
      credentails: "include",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(newRegisterUser, "<---- register fetch request");

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
