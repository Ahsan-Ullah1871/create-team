import React, { useContext } from "react";
import "./Add.css";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AddedPeople } from "../App";

const Add = () => {
	const [newPeople, setNewPeople] = useContext(AddedPeople);

	const defaultProps = {
		bgcolor: "background.paper",
		borderColor: "text.secondary",
		m: -5,
		border: 4,
		style: { width: "5rem", height: "5rem" },
	};

	return (
		<div>
			<div className="addBox">
				<Box
					display="flex"
					justifyContent="center"
					className="myBox mb-5"
				>
					<Box
						borderRadius="50%"
						{...defaultProps}
						className="text-center "
					>
						<h2 className="mt-3">
							{newPeople.length}
						</h2>
					</Box>
				</Box>

				<div className="text">
					<h3>
						Are you sure that you want to build
						your team with these people?
					</h3>
				</div>
				<div className="footer  text-center mt-5">
					<Button
						variant="contained"
						color="primary"
						className="ml-0"
						onClick={() => setNewPeople([])}
					>
						Clear
					</Button>
					<Link
						to="/group"
						style={{ textDecoration: "none" }}
					>
						<Button
							variant="contained"
							color="secondary"
							className="ml-5"
						>
							Confirm
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Add;
