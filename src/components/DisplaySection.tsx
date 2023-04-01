import React from "react";

export const DisplaySection = ({
	triggerPreview,
}: {
	triggerPreview: () => void;
}) => {
	const handleScroll = () => {
		window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
	};
	return (
		<section className="display-section wrapper">
			<h2 className="title">New</h2>
			<p className="text">Brilliant.</p>
			<span className="description">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
			</span>
			<button className="button" onClick={triggerPreview}>
				Try Me!
			</button>
			<button className="back-button" onClick={handleScroll}>
				Top
			</button>
		</section>
	);
};
