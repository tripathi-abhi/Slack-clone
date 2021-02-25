import React, { useState, useEffect } from "react";
import "emoji-mart/css/emoji-mart.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Container, Main } from "./Components/StyledComponents";
import darkModeContext from "./Context/DarkModeContext.js";
import db from "./firebase";

function App() {
	const [dark, setDark] = useState(
		localStorage.getItem("darkTheme") === "true" || false
	);

	const [rooms, setRooms] = useState([]);

	const getChannels = () => {
		db.collection("rooms").onSnapshot(snapshot => {
			setRooms(
				snapshot.docs.map(doc => {
					return {
						id: doc.id,
						data: doc.data(),
					};
				})
			);
		});
	};

	useEffect(() => {
		getChannels();
	}, []);

	console.log(rooms);

	return (
		<darkModeContext.Provider value={{ dark, setDark }}>
			<div className="App">
				<Router>
					<Container>
						<Header />
						<Main>
							<Sidebar rooms={rooms} />
							<Switch>
								<Route path="/room">
									<Chat />
								</Route>
								<Route path="/">
									<Login />
								</Route>
								{/* <Redirect>Login Page</Redirect> */}
							</Switch>
						</Main>
					</Container>
				</Router>
			</div>
		</darkModeContext.Provider>
	);
}

export default App;
