
import React, { Component } from 'react';
import {Media} from 'reactstrap';

import Header from '../Partials/header';
import Footer from '../Partials/footer';

class Home extends Component{
	render(){
		return(

			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}
export default Home;