import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class Comedy extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items:[]
		};
	}

	getVideo(){
		Axios
		.get('http://localhost:3000/comedy')
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
				<h3>Comedy</h3>
                <div className="row flex_to_center_wrap">
                    {this.state.items.map(item => (
                        <div key={item.id} className="col-xs-6">
                            <h4>{item.title}</h4>
                            <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} width="120vw"/>
                            <p className = "text-left"><span className="bold">Vote average :</span> {item.vote_average}</p>
						    <p className = "text-left"><span className="bold">Release date :</span> {item.release_date} </p>
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

export default Comedy;