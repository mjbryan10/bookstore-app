import React, { Component } from "react";
import Logo from "./logo.png";

export default class Header extends Component {
	state = {
		query: "",
	};
	//METHODS:
	onChange = (e) => this.setState({ [e.target.name]: e.target.value });
	onSubmit = (e) => {
        e.preventDefault();
        
		this.props.searchBook(this.state.query);
        // this.setState({ query: "" });
	};
	render() {
		return (
			<header>
				<img src={Logo} alt="Logo" style={logoStyle} />
				<h1>Ubiqum Bookstore</h1>
				<form onSubmit={this.onSubmit} className="search-container">
					<input
						name="query"
						type="text"
						id="search"
						placeholder="Search for book.."
						// value={this.state.query}
						// value="test"
						onChange={this.onChange}
					/>
					<button type="submit" value="submit">Search</button>
				</form>
			</header>
		);
	}
}

const logoStyle = {
	height: "75px",
	width: "75px",
};
