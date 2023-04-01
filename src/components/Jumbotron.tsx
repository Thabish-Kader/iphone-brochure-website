import React from "react";
import iphone from "../assets/images/iphone-14.jpg";
export const Jumbotron = () => {
	return (
		<div className="jumbotron-section wrapper">
			<h2 className="title">New</h2>
			<img src={iphone} className="logo" alt="iphone 14 pro" />
			<p className="text">Big and bigger</p>
			<span className="description">From $41.44/mo --- for -- trade</span>
			<ul className="links">
				<li>
					<button className="button">Buy</button>
				</li>
				<li>
					<a className="link">Learn More</a>
				</li>
			</ul>
		</div>
	);
};
