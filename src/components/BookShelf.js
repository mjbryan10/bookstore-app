import React, { Component } from "react";
import Book from "./Book";

export default class BookShelf extends Component {
    render() {
        let filteredBooks = this.props.books
        .filter(book => book.title.toLowerCase()
            .includes(this.props.query.toLowerCase()));
        
        if (!filteredBooks.length) {
            return (
                <div className="catch-search-container" >
                    <h3>Sorry! :(</h3>
                    <p>It appears we were unable to find the book you were looking for.</p>
                </div>
            )
                    
        }
        return filteredBooks.map(book => <Book book={book} />);
	}
}
