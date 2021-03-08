import React from "react";
import "./Home.css";
import { Jumbotron, Button } from "react-bootstrap";
import MyCarousel from "../Curosel/Curosel";
import Image1 from "../Images/image1.png";
import Image2 from "../Images/image2.png";
import Image3 from "../Images/image3.png";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<MyCarousel
				image1={Image1}
				image2={Image2}
				image3={Image3}
			></MyCarousel>
			<Jumbotron className="mt-4">
				<h1 className=" text-center">Welcome</h1>
				<div className="JumbotronParagraph">
					<p className="  ml-5 ms-5">
						Welcome to our group. You can select a
						few friends of your choice here and
						work in unison with them. We hope you
						find some loyal friends like your
						choice.
					</p>
				</div>
				<p className="text-center">
					<Link
						to="/member"
						style={{ textDecoration: "none" }}
					>
						<Button variant="primary">
							Show Member
						</Button>
					</Link>
				</p>
			</Jumbotron>
			<hr className="homeHrLine"></hr>
		</div>
	);
};

export default Home;
