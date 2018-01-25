import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class MovieYear extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
	}

	getYear(){
		Axios
		.get(`http://localhost:3000/${this.props.match.params.year}`)
		.then(response => {
			this.setState({
				items: response.data
			});
			console.log(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	componentDidMount() {
		this.getYear();
	}

	render() {
		return (
			<div className="popularYear">
				<h2>{this.props.match.params.year}</h2>
			</div>
			

		);
	}
}

export default MovieYear;