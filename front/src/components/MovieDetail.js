import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

class MovieDetail extends Component {

	constructor(props) {
		super(props);
		this.state = {
            movie:[],
            isLoading: true
		};	
	}

	getMovie(){

		Axios
		.get(`http://localhost:3000/${this.props.match.params.id}`)
		.then(response => {
			this.setState({
                movie: response.data, 
                isLoading: false
			});
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	componentDidMount() {
		this.getMovie();
	}

	render() {
        console.log(this.state);
        let content;
        if(this.state.isLoading){
            content = <p>loading</p>;
        } else {
          content=  <div className="container">
            <h2><span role="img" aria-label="Pop corn"> 🍿 </span>{this.state.movie.title}<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
            <h3>Trailer</h3>
            <div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.state.movie.videos.results[0].key}`} />
			</div>
            <div className ="row flex_to_center movieDetail">
                    <div className="col-xs-4">
						<img src={`${IMAGE_BASE_URL}${this.state.movie.poster_path}`} alt={this.state.movie.title} width="200vh"/>
					</div>
					<div className="col-xs-6">					
						<p className = "text-left"><span className="bold">Vote average :</span> {this.state.movie.vote_average} </p>
						<p className = "text-left"><span className="bold">Release date :</span> {this.state.movie.release_date} </p>
                        <p className = "text-left"><span className="bold">Genres :</span>
                            <ul>
                                {this.state.movie.genres.map(genre => <li>{genre.name}</li>)}
                            </ul>
                        </p>
                        <p className = "text-left"> <span className="bold">Productions companies :</span>
                            <ul>
                                {this.state.movie.production_companies.map(company => <li>{company.name}</li>)}
                            </ul>
                        </p>
                        <p className = "text-left"><span className="bold">Productions countries :</span>
                            <ul>
                                {this.state.movie.production_countries.map(country => <li>{country.name}</li>)}
                            </ul>
                        </p>
                        <p className="justify">{this.state.movie.overview}</p>
                        <Link to="/" exact="true">Go back home</Link>
					</div>					
            </div>

        </div>
    
        }
		return (
		    content

		);
	}
}

export default MovieDetail;