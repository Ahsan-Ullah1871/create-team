import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

import { Button, Fab, Tooltip } from "@material-ui/core";
import "./People.css";
import { Link } from "react-router-dom";
const People = (props) => {
	const { title, first, last } = props.member.name;
	const { picture, phone, id } = props.member;
	const FullName = ` ${title} ${first} ${last}`;

	const [isClicked, setIsClicked] = useState(false);

	return (
		<div className="people">
			<div className="image">
				<img src={picture.large} alt="" />
			</div>
			<div className="info mt-4">
				<h3>Name:{FullName}</h3>
				<h4>Phone: {phone}</h4>
			</div>
			<div className="buttonSection d-flex justify-content-between align-items-center">
				<Link to={"/people/" + id.value}>
					<Button
						className="ml-2"
						variant="contained"
						color="primary"
					>
						Details
					</Button>
				</Link>
				<Tooltip
					className="mr-2"
					title={
						isClicked
							? "Already Added"
							: "Add in Your Group"
					}
					aria-label="add"
					onClick={() => {
						props.AddHandler(props.member);
						setIsClicked(true);
					}}
				>
					<Fab color="secondary">
						<AddIcon />
					</Fab>
				</Tooltip>
			</div>
		</div>
	);
};

export default People;
