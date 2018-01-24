import React, { Component } from 'react';
import MostPopular from '../components/Mostpopular';
import TenMostPopular from '../components/TenMostPopular';


class Home extends Component {

	render() {
    
		return (
			<div className="container">
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Home<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<h3>Welcome to CineWild and Embark with us into a wonderful journay into 7 art !</h3>
				<MostPopular/>
				<TenMostPopular/>

			</div>
			
		);
	}
}

export default Home;