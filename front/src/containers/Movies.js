import React, { Component } from 'react';
import Animation from '../components/Animation';
import Comedy from '../components/Comedy';
import Adventure from '../components/Adventure';

class Movies extends Component {

	render() {
    
		return (
			<div className="container">
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Recommandations by genre<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<Animation/>
				<Comedy/>
				<Adventure/>
			</div>
		);
	}
}

export default Movies;