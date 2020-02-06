import React, { Component } from "react";
import Logo from "./logo.png";

export default class Header extends Component {
	state = {
		query: "",
	};
	//METHODS:
	onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        this.props.searchBook(this.state.query);
    }
	render() {
		return (
			<header>
				<img src={Logo} alt="Logo" style={logoStyle} />
				<h1>Ubiqum Bookstore</h1>
				<div className="search-container">
					<input
						name="query"
						type="text"
						id="search"
						placeholder="Search for a book.."
						onChange={this.onChange}
					/>
				</div>
			</header>
		);
	}
}

const logoStyle = {
	height: "75px",
	width: "75px",
};
