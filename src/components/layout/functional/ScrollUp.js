import React, { Component } from "react";
import "./scrollUp.scss";

export default class ScrollUp extends Component {
	smoothScroll(e) {
		e.preventDefault();
		let duration = 1000;

		let targetPosition = 0;
		let startPosition = window.pageYOffset;
		let distance = targetPosition - startPosition;
		let startTime = null;
		function animation(currentTime) {
			if (startTime === null) startTime = currentTime;
			let timeElapsed = currentTime - startTime;
			let run = ease(timeElapsed, startPosition, distance, duration);
			window.scrollTo(0, run);
			if (timeElapsed < duration) requestAnimationFrame(animation);
		}
		function ease(t, b, c, d) {//http://gizma.com/easing/ for equations
			t /= d;
			return c * t * t * t + b;
		}
		requestAnimationFrame(animation);
	}
	render() {
		return (
			<div className="scroll-container">
				{/*eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
				<a href="#" className="scroll-text" onClick={this.smoothScroll} >
					&uarr;
				</a>
			</div>
		);
	}
}
