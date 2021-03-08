import { Carousel } from "react-bootstrap";
import "./Curosel.css";

import React from "react";

const MyCarousel = (props) => {
	const { image1, image2, image3 } = props;
	return (
		<div>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src={image1}
						alt="First slide"
					/>
					<Carousel.Caption>
						<p></p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className="d-block w-100"
						src={image2}
						alt="Second slide"
					/>
					<Carousel.Caption>
						<p></p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={image3}
						alt="Third slide"
					/>
					<Carousel.Caption>
						<p></p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default MyCarousel;
