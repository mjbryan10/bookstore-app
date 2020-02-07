import React, { Component } from "react";
import Header from "./components/layout/Header";
import BookShelf from "./components/BookShelf";
import ScrollUp from './components/layout/functional/ScrollUp'
import "./App.scss";

const API = "https://api.myjson.com/bins/zyv02";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
	  books: [],
	  isLoading: true,
	  query: "",
	  error: ""
    };
  }

  //METHODS
  searchBook = (query) => {
    this.setState({query: query})
  }

	async componentDidMount() {
		let data = await fetch(API)
			.then(res => res.json())
			.then(data => data)
			.catch(err => err)
		
			if (data.books)
			this.setState({ books: data.books, isLoading: false })
			else
			this.setState({error: data})
			console.log(this.state.error)
	}
	render() {
		if (!this.state.isLoading)
		return (
			<div className="App">
				<Header searchBook={this.searchBook} />
				{/* <div className="books-container"> */}
					<BookShelf books={this.state.books} query={this.state.query} />
				{/* </div> */}
				<ScrollUp />
			</div>
		);
		return (<div>loading ...</div>)
	}
}
