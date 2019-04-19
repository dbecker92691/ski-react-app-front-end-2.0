import React, {Component} from 'react';
import NavBar from './NavBar';
import MapContainer from '../Map/MapContainer';
import {BrowserRouter, Route} from 'react-router-dom';






export default class Main extends Component {
	render(){
		return(
			<BrowserRouter>
				<div>
					<NavBar />
					<h2> future list of posts! </h2>
					<Route exact path='/' component={Main} />
					<Route path='/map' component={MapContainer} />

				</div>
			</BrowserRouter>
		)
	}
}