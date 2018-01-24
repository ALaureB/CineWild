import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Axios from 'axios';

class Contact extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			mail: '',
			subject: '',
			message: '',
			redirect: false
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange (event) {
		this.setState({ [event.target.name]: event.target.value });
	}

	handleSubmit(event) {
		event.preventDefault();
		Axios
		.post('http://localhost:3000/notify', {
			name: this.state.name,
			mail: this.state.mail,
			subject: this.state.subject,
			message : this.state.message
		})
		.then(() => this.setState({ redirect: true }))
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {

		const { redirect } = this.state;
		if (redirect) {
			return (
				<Redirect to="/"/>
			)
		}
    
		return (
			<div className="container">
				<h2><span role="img" aria-label="Pop corn"> 🍿 </span>Contact<span role="img" aria-label="Pop corn"> 🍿 </span></h2>
				<p className="highlight">If you want to contact me, please fill this form. I will be very happy to hear from you soon !</p>

				<form className="col-xs-8 col-xs-offset-2" onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label for="name" className="pull-left">Name*</label>
						<input type="text" className="form-control input" name="name" onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label for="mail" className="pull-left">Mail*</label>
						<input type="email" className="form-control input" name="mail" onChange={this.handleChange} required />
					</div>
					<div className="form-group">
						<label for="subject" className="pull-left">Subject*</label>
						<input type="text" className="form-control input" name="subject" onChange={this.handleChange} required/>
					</div>
					<div>
						<label for="message" className="pull-left">Your message*</label><br />
						<textarea className="form-control" name="message" rows="6" maxLength="400" onChange={this.handleChange} required></textarea>
					</div>
					<div className="g-recaptcha" data-sitekey="6Lefpj8UAAAAADLJJ7uHoQ1s71SiSORr4jxKGd8v"></div>					
					<hr/>
					<button type="submit">Envoyer</button>
					<p className="text-left">*All fields are mandatory !</p>
				</form> 
			</div>
		);
	}
}

export default Contact;