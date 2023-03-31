import React from "react";
import Logo from "../assets/images/logo.svg";
export const Navbar = () => {
	return (
		<nav className="nav-wrapper">
			<div className="nav-content">
				<ul className="list-style">
					<li>
						<img src={Logo} alt="" />
					</li>
				</ul>
			</div>
		</nav>
	);
};
