import React from "react";
import logo from "../assets/images/logo.svg";
import search from "../assets/images/search.svg";
import store from "../assets/images/store.svg";

export const Navbar = () => {
	return (
		<nav className="nav-wrapper">
			<div className="nav-content">
				<ul className="list-styled">
					<li>
						<img src={logo} alt="" />
					</li>
					<li>
						<a className="link-styled">Store</a>
					</li>
					<li>
						<a className="link-styled">Mac</a>
					</li>
					<li>
						<a className="link-styled">iPad</a>
					</li>
					<li>
						<a className="link-styled">iPhone</a>
					</li>
					<li>
						<a className="link-styled">Watch</a>
					</li>
					<li>
						<a className="link-styled">AirPods</a>
					</li>
					<li>
						<a className="link-styled">TV & Home</a>
					</li>
					<li>
						<a className="link-styled">Entertainments</a>
					</li>
					<li>
						<a className="link-styled">Accessories</a>
					</li>
					<li>
						<a className="link-styled">Support</a>
					</li>
					<li>
						<img src={search} alt="search" />
					</li>
					<li>
						<img src={store} alt="store" />
					</li>
				</ul>
			</div>
		</nav>
	);
};
