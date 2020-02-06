import React, { Component } from "react";
import Header from "./components/layout/Header";
import BookShelf from "./components/BookShelf";
import "./App.scss";

const API = "https://api.myjson.com/bins/zyv02";

export default class App extends Component {
	state = {
		books: [],
	};
	componentDidMount() {
		fetch(API)
			.then(res => res.json())
			.then(data => this.setState({ books: data.books }));
	}
	render() {
		return (
			<div className="App">
				<Header />
				<div className="books-container">
					<BookShelf books={this.state.books} />
				</div>
			</div>
		);
	}
}
