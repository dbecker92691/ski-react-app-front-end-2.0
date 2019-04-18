import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText, Col, Container} from 'reactstrap';
import FakeNavBar from './FakeNavBar';
import './style.css';


export default class Login extends Component {
	constructor(){
		super();

		this.state = {
			loginForm: {
				username: "",
				password: ""
			},
			registrationForm: {
				username: "",
				password: ""
			},
			which: "login"
		}
	}

	handleRegisterChange = (e) =>{
		this.setState({
			registrationForm: {
				...this.state.registrationForm,
				[e.currentTarget.name] : e.currentTarget.value
			}
		});
	}

	handleLoginChange = (e) => {
		this.setState({
			loginForm: {
				...this.state.loginForm,
				[e.currentTarget.name]: e.currentTarget.value
			}
		})
	}

	handleLoginSubmit = (e) => {
		e.preventDefault();

		this.props.handleLogin(this.state.loginForm);
	}

	handleRegistrationSubmit = (e) => {
		e.preventDefault();

		this.props.handleRegister(this.state.registrationForm);
	}
	toggle = () => {
		if(this.state.which === "login"){
			this.setState({
				which: "register"
			})
		} else {
			this.setState({
				which: "login"
			})
		}
	}
 
	render(){
		return(
			<div>
			<FakeNavBar />
				<Container className="login-register-container">
					<Form className="login-register-form" >
							{ this.state.which === "login" ?
								<Col sm="12" md={{ size: 6, offset: 3 }}>
									<h1>{this.state.which === "login" ? "Log in here" : "Register here"} </h1>
										<FormGroup className="login-form"  >
											<Label id="usename-label" for="username">Username:</Label>
											<Col>
												<Input type="text" name="username" placeholder="Username" onChange={this.handleLoginChange} />
											</Col>
											<Label id="password-label" for="password">Password:</Label>
											<Col>
												<Input type="password" name="password" placeholder="password" onChange={this.handleLoginChange} />
											</Col>
											<Button onClick={this.handleLoginSubmit}> Submit </Button>
										</FormGroup>
								</Col>
							: 
								<Col sm="12" md={{ size: 6, offset: 3 }}>
								<h1>{this.state.which === "login" ? "Log in here" : "Register here"} </h1>
									<FormGroup className="registration-form">
										<Label for="username">Username:</Label>
										<Input type="text" name="username" placeholder="Username" onChange={this.handleRegisterChange} />
										<Label for="password">Password:</Label>
										<Input type="password" name="password" placeholder="Password" onChange={this.handleRegisterChange} />
										<Button onClick={this.handleRegistrationSubmit}> Submit </Button>
									</FormGroup>
								</Col>
							}
							<h3>{this.state.which === "login" ? "Need an account? Sign Up" : "Already have an account? Log in"} 
							<span className="fake-link" onClick={this.toggle}> here!</span></h3>
						</Form>
				</Container>
			</div>
		)
	}
}




