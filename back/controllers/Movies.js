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
    },

    animation : (req, res) => {
        axios
            .get(`${api_base_request}discover/movie?with_genres=16&sort_by=vote_average.desc&vote_count.gte=10&${api_key}`)
            .then(results => res.send(results.data.results.slice(0,4)));
    },

    comedy : (req, res) => {
        axios
            .get(`${api_base_request}discover/movie?with_genres=35&sort_by=vote_average.desc&vote_count.gte=10&${api_key}`)
            .then(results => res.send(results.data.results.slice(0,4)));
    },

    adventure : (req, res) => {
        axios
            .get(`${api_base_request}discover/movie?with_genres=12&sort_by=vote_average.desc&vote_count.gte=10&${api_key}`)
            .then(results => res.send(results.data.results.slice(0,4)));
    },

    year : (req, res) => {
        let annee = req.params.year;
        axios
            .get(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${annee}&sort_by=popularity.desc&api_key=18e8c3c1932266b4b7877f49f3f5cc59`)
            .then(results => res.send(results.data.results.slice(0,3)));
    },

    getMovieDetails : (req, res) => {
        let id = req.params.id;
        axios
            .get(`${api_base_request}movie/${id}?${api_key}&append_to_response=videos&include_adult=false`)
            .then(results => res.send(results.data));
    },

    notify: (req, res, next) => {
		var transport = nodemailer.createTransport({
			host: "smtp.mailtrap.io",
			port: 2525,
			auth: {
				user: "282a3d165de31e",
				pass: "be3b011087f729"
			}
		});
		transport.sendMail({
			from: req.body.name,
			to: "charleston_steps@yopmail.com",
			subject: req.body.subject,
			text: 'Name : ' + req.body.name + '\n' + 'Mail : ' + req.body.mail + '\n' + 'Subject : ' + req.body.subject + '\n' + 'Message : ' + req.body.message,
			html: '<p>' + '<b>' + 'Nom : ' + '</b>'+ req.body.name + '<p>' + '<b>' + 'Mail : ' + '</b>' + req.body.mail + '<p>' + '<b>' + 'Subject : ' + '</b>'+ req.body.subject + '<p>' + '<b>' + 'Message : ' + '</b>' + req.body.message + '</p>'
		}, (error, response) => {
			if(error){
				console.log(error);
			} else{
				res.send('OK send !!');
			}
		});
	}



    
};