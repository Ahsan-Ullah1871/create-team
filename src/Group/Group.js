import { Avatar, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { AddedPeople } from "../App";
import "./Group.css";
const Group = () => {
	const [newPeople, setNewPeople] = useContext(AddedPeople);
	return (
		<div>
			<div className="group">
				<h3 className="text-center">Your Group</h3>
				<div className="thanks">
					<h2>Thank You So much</h2>
					<p>
						We hope you and your team will go a
						long way towards success.
					</p>
				</div>
				<div className="team">
					<h3>Your Team Member:{newPeople.length}</h3>
					<div className="pictire d-flex flex-wrap justify-content-around text-center">
						{newPeople.map((one) => {
							const url = one.picture.large;
							const {
								title,
								first,
								last,
							} = one.name;
							const FullName = `${title} ${first} ${last}`;
							return (
								<>
									<div className=" text-center">
										<Avatar
											alt="Remy Sharp"
											src={
												url
											}
										/>
										<p className="ms-4">
											{
												FullName
											}
										</p>
									</div>
								</>
							);
						})}
					</div>
				</div>
				{/* <Button variant="outlined" href="#outlined-buttons">
					Group Details
				</Button> */}
			</div>
		</div>
	);
};

export default Group;
