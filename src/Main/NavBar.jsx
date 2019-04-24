import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, } from 'reactstrap';
import "../App.css";




 export default class NavBar extends Component {

 	constructor(){
 		super();
 		this.toggleNavbar = this.toggleNavbar.bind(this);
 		this.state = {
 			collapsed: true
 		}
 	}

 	toggleNavbar() {
 		this.setState({
 			collapsed: !this.state.collapsed
 		})
 	}

 	/* Use React-router to establish links to different components within the nav bar*/

 	render(){
 		return(
 			<div>
 				 <Navbar color="primary" light>
		          <NavbarBrand href="/" className="text-white">Snow Patrol</NavbarBrand>
		          <NavbarToggler onClick={this.toggleNavbar} className="text-white" />
		          <Collapse isOpen={!this.state.collapsed} navbar>
		            <Nav navbar>
		              <NavItem>
		                <NavLink >
		                	Map
		                </NavLink>
		              </NavItem>
		              <NavItem>
		                <NavLink >Logout or account or something</NavLink>
		              </NavItem>
		            </Nav>
		          </Collapse>
		        </Navbar>
 			</div>
 		)
 	}
 }