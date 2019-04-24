import React, { Component } from 'react';
import './App.css';
import Login from "./Login/Login";
import Main from "./Main/Main"


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

    /* Error is happening at the "await" in the new login user if check*/
    /* login error could be password not being incripted */

    const newUserLogin = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_LOGIN}/login`, {
      method: "POST",
      credentails: "include",
      body: JSON.stringify(formData),
      headers:{
        "Content-Type": "application/json"
      }
    });

    console.log(newUserLogin, "<---- login fetch request");

    if(newUserLogin.status === 200){

      const newLoginResponse = newUserLogin.json();

      this.setState({
        currentUser: newLoginResponse,
        loggedIn: true,
        error:""
      })
      console.log("Successful login")
    }else{
      this.setState({
        error: "Invalid login credentails"
      })
    }

  }

  handleRegister = async (formData) => {

    console.log(formData, "<----- register form data");
    console.log(JSON.stringify(formData), "<----- strigified regiester form data");

    const newRegisterUser = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS_LOGIN}/register`, {
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
          { this.state.loggedIn === true ?
            <Main /> :
            <Login handleLogin={this.handleLogin} handleRegister={this.handleRegister} />
          }
        </div>
    );
  }
}

export default App;
