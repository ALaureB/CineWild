const axios = require("axios");
const api_key = require("../config").apikey;
const api_base_request = "https://api.themoviedb.org/3/";

module.exports = {
	mostPopularMovie : (req, res) => {
        axios
            .get(`${api_base_request}discover/movie?sort_by=popularity.desc&include_adult=false&${api_key}`)
            .then(results => res.send(results.data.results[0]));
    },
    
    tenMostPopularMovie : (req, res) => {
        axios
            .get(`${api_base_request}discover/movie?sort_by=popularity.desc&include_adult=false&${api_key}`)
            .then(results => res.send(results.data.results.slice(1,11)));
	}
};