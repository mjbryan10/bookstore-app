import React, { Component } from "react";

export default class Book extends Component {
	render() {
		const { title, cover, description } = this.props.book;
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
						<h1> {title} </h1>
						<p> {description} </p>
						<p>We love that guy</p>
					</div>
				</div>
			</div>
		);
	}
}

//STYLES
// const bookCover = {
// 	width: "200px",
// 	height: "300px",
// };

// IMAGE FLIP FROM W3Schools

{
	/* <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <img src= {cover} alt="Book Cover" style="width:300px;height:300px;">
        </div>
        <div className="flip-card-back">
            <h2> {book.title} </h2>
            <p>Architect & Engineer</p>
            <p>We love that guy</p>
        </div>
    </div>
</div> */
}
