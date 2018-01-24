import React, { Component } from 'react';
import Axios from 'axios';

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
			<div>
				{this.state.items.title}
				<br/>
				{this.state.items.overview}
			</div>
		);
	}
}

export default MostPopular;