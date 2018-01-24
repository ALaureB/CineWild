import React, { Component } from 'react';
import MostPopular from '../components/Mostpopular';

class Home extends Component {

	render() {
    
		return (
			<div className="container">
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Home<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<MostPopular/>
			</div>
			
		);
	}
}

export default Home;