import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<>
			<div className="header d-flex justify-content-between align-items-center">
				<div className="logo ml-5">
					<h2>Create Team</h2>
				</div>
				<div className="navbar mr-5">
					<Link to="/home">Home</Link>
					<Link to="/member">Member</Link>
					<Link to="/group"> Group</Link>
					<Link to="/about">About</Link>
				</div>
			</div>
			<hr className="hrLine"></hr>
		</>
	);
};

export default Header;
