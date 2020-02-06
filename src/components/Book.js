import React, { Component } from "react";

export default class Book extends Component {
	render() {
		const { title, cover, description, detail } = this.props.book;
		return (
			// <div>
			//     <p> {this.props.book.title} </p>
			//     <img src= {cover} alt="Book Cover" style={bookCover} />
			// </div>
			<div className="flip-card book">
				<div className="flip-card-inner">
					<div className="flip-card-front">
                        <img 
                            className="book-cover"
							src={cover}
                            alt="Book Cover"
						/>
					</div>
					<div className="flip-card-back">
						<h2> {title} </h2>
						<p> {description} </p>
						<a href={detail} >More info</a>
					</div>
				</div>
			</div>
		);
	}
}

