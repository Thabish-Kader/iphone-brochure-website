import React from "react";

export const SoundSection = () => {
	const handleLearnMore = () => {
		const element = document.querySelector(".display-section");
		window.scrollTo({
			top: element?.getBoundingClientRect().bottom,
			left: 0,
			behavior: "smooth",
		});
	};
	return (
		<section className="sound-section wrapper">
			<div className="body">
				<div className="sound-section-content content">
					<h2 className="title">New Sound System</h2>
					<p className="text">Teel the base</p>
					<span className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</span>
					<ul className="links">
						<li>
							<button className="button">Buy</button>
						</li>
						<li>
							<a className="link" onClick={handleLearnMore}>
								Learn more
							</a>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};
