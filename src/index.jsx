import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from "react-router-dom"; 
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App';
// import Main from './Main/Main';
// import MyProfile from './Main/MyProfile/MyProfile';
// import MapComponent from './Main/MapComponent/MapComponent';

/* this is causing issues with the Main component showing up. Maybe read more into the Ancestory Route */


ReactDOM.render(
	<App/ >, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
