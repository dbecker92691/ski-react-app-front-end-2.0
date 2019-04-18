import React from 'react';
import {NavbarBrand, Navbar} from 'reactstrap'; 

const FakeNavBar = () =>  {

	return(
		<div>
			<Navbar color="primary" light expand="lg">
						<NavbarBrand href='/'>
							Snow Patrole
						</NavbarBrand>
			</Navbar>
		</div>
	)
}


export default FakeNavBar;