import React from "react";
import { Card } from "react-bootstrap";

const NotFound = () => {
	return (
		<div>
			<Card
				border="danger"
				style={{
					width: "18rem",
					margin: "0 auto",
					textAlign: "center",
					fontFamily: "DotGothic16",
				}}
			>
				<Card.Header>SORRY</Card.Header>
				<Card.Body>
					<Card.Title>Error... 404</Card.Title>
					<Card.Text>
						We are sincerely sorry. We couldn't
						find your page !!
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};

export default NotFound;
