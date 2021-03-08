import React, { useContext, useEffect, useState } from "react";
import fakeData from "../Fakedata/FakeData.json";
import People from "./People";
import Add from "./../Add/Add";
import { AddedPeople } from "../App";

const Member = () => {
	const [members, setMember] = useState([]);
	useEffect(() => {
		setMember(fakeData.results);
	}, []);

	const [newPeople, setNewPeople] = useContext(AddedPeople);

	const AddHandler = (people) => {
		const check = newPeople.indexOf(people);
		if (check === -1) {
			const newAdd = [people, ...newPeople];
			setNewPeople(newAdd);
		}
	};
	return (
		<>
			<div className="d-flex flex-wrap">
				{members.map((member) => (
					<People
						member={member}
						AddHandler={AddHandler}
					></People>
				))}
			</div>
			<Add></Add>
		</>
	);
};

export default Member;
