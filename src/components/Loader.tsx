import React from "react";
import animatedLogo from "../assets/images/logo-animated.gif";
export const Loader = () => {
	return (
		<div className="loader">
			<img src={animatedLogo} alt="logo" className="logo" />
		</div>
	);
};
