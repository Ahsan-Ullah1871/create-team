import React from "react";
import { useParams } from "react-router";
import fakeData from "../Fakedata/FakeData.json";
import "./Details.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Details = () => {
	const { id } = useParams();

	let Data = fakeData.results;
	let findPeople = Data.find((pl) => pl.id.value === id);

	const { title, first, last } = findPeople.name;
	const { email, picture, gender, phone } = findPeople;
	const { city, country } = findPeople.location;
	const fullName = ` ${title} ${first} ${last}`;

	console.log(fullName);
	return (
		<div>
			<Link to="/member" style={{ textDecoration: "none" }}>
				<Button variant="contained" color="secondary">
					<FontAwesomeIcon icon={faBackward} />
					Back
				</Button>
			</Link>
			<div className="detailsSection d-flex align-items-center">
				<div className="part1">
					<img src={picture.large} alt="" />
					<h3>Name: {fullName}</h3>
					<h4>Gender: {gender}</h4>
				</div>
				<div className="part2">
					<h4>City: {city}</h4>
					<h4>Country: {country}</h4>
					<h4>Phone: {phone}</h4>
					<h4>Email: {email}</h4>
				</div>
			</div>
		</div>
	);
};

export default Details;
