import React from "react";
import iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

export const Hero = () => {
	const handleLearnMore = () => {
		const element = document.querySelector(".sound-section");
		window.scrollTo({
			top: element?.getBoundingClientRect().top,
			left: 0,
			behavior: "smooth",
		});
	};
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
					<a className="link" onClick={handleLearnMore}>
						Learn More
					</a>
				</li>
			</ul>
			<img className="iphone-img" src={HoldingIphone} alt="iphone" />
		</div>
	);
};
