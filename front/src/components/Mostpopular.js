import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class MostPopular extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
	}

	getVideo(){
		Axios
		.get('http://localhost:3000/popular')
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
		this.getVideo();
	}

	render() {
		return (
			<div className="popular">
				<h4>Current most popular movie</h4>
				<div className ="row flex_to_center">
					<div className="col-xs-4">
						<img src={`${IMAGE_BASE_URL}${this.state.items.poster_path}`} alt={this.state.items.title}width="200vh"/>
					</div>
					<div className="col-xs-6">					
						<h5>{this.state.items.title}</h5>
						<p className = "text-left">Vote average : {this.state.items.vote_average} </p>
						<p className = "text-left">Release date : {this.state.items.release_date} </p>
						<p className="justify">{this.state.items.overview}</p>
						<Link to={`/movie/${this.state.items.id}`} exact="true">Discover this movie</Link>
					</div>
					
				</div>

			</div>
			

		);
	}
}

export default MostPopular;