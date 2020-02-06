import React, { Component } from "react";
import Book from "./Book";

export default class BookShelf extends Component {
	render() {
		return this.props.books
            .filter(book => book.title.toLowerCase()
                .includes(this.props.query.toLowerCase()))
			.map(book => <Book book={book} />);
	}
}

// import React from "react";

// import Book from "./Book";

// export default function BookShelf() {
// 	return (this.props.books.map(book => <Book book={book} />));
// }
