import React from "react";
import Logo from "./logo.png";

export default function Header() {
	return (
		<header>
			<img src={Logo} alt="Logo" style={logoStyle} />
			<h1>Ubiqum Bookstore</h1>
			<div className="search-container" >
				<input type="text" id="search" placeholder="Search for book.." />
				<button type="submit">Search</button>
			</div>
		</header>
	);
}

const logoStyle = {
    height: '75px',
    width: '75px'
}
