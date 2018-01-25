import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class TenMostPopular extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
	}

	getTenVideo(){
		Axios
		.get('http://localhost:3000/tenpopular')
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
		this.getTenVideo();
	}

	render() {
		return (
			<div className="popular">
				<h4>Other 10 most popular movies</h4>
                <div className="row flex_to_center_wrap">
                    {this.state.items.map(item => (
                        <div key={item.id} className="col-xs-6">
                            <h5>{item.title}</h5>
                            <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} width="120vw"/>
                            <p className = "text-left">Vote average : {item.vote_average}</p>
						    <p className = "text-left">Release date : {item.release_date} </p>
						    <p className="justify">{item.overview}</p>
							<Link to={`/movie/${item.id}`} exact="true">Discover this movie</Link>
                        </div>)
                        )
                    }
                </div>



			</div>
			

		);
	}
}

export default TenMostPopular;