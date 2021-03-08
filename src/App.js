import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Details from "./Details/Details";
import Footer from "./Footer/Footer";
import Group from "./Group/Group";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Member from "./Member/Member";
import NotFound from "./Notfound/NotFound";

export const AddedPeople = createContext();

const App = () => {
	const [newPeople, setNewPeople] = useState([]);

	return (
		<AddedPeople.Provider value={[newPeople, setNewPeople]}>
			<div className=" body ">
				<div className="sections">
					<Router>
						<Header></Header>

						<Switch>
							<Route exact path="/">
								<Home></Home>
							</Route>
							<Route path="/home">
								<Home></Home>
							</Route>

							<Route path="/member">
								<Member></Member>
							</Route>
							<Route path="/people/:id">
								<Details></Details>
							</Route>
							<Route path="/group">
								<Group></Group>
							</Route>
							<Route path="/about">
								<About></About>
							</Route>
							<Route path="*">
								<NotFound></NotFound>
							</Route>
						</Switch>
						<Footer></Footer>
					</Router>
				</div>
			</div>
		</AddedPeople.Provider>
	);
};

export default App;
