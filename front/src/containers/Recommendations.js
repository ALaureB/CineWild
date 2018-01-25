import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Recommendations extends Component {

	render() {
    
		return (
			<div className="container">
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Recommendations by year<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<Link to="/year/1987" exact="true">1987</Link>
				<br/>
				<Link to="/year/1988" exact="true">1988</Link>
				<br/>
				<Link to="/year/1987" exact="true">1989</Link>
				<br/>
				<Link to="/year/1987" exact="true">1990</Link>
				<br/>
			</div>
		);
	}
}

export default Recommendations;