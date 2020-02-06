import React, { Component } from "react";
import Header from "./components/layout/Header";
import BookShelf from "./components/BookShelf";
import "./App.scss";

const API = "https://api.myjson.com/bins/zyv02";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      query: ""
    };
  }

  //METHODS
  searchBook = (query) => {
    console.log(this)
    this.setState({query: query})
  }

	componentDidMount() {
		fetch(API)
			.then(res => res.json())
			.then(data => this.setState({ books: data.books }));
	}
	render() {
		return (
			<div className="App">
				<Header searchBook={this.searchBook} />
				<div className="books-container">
					<BookShelf books={this.state.books} query={this.state.query} />
				</div>
			</div>
		);
	}
}
