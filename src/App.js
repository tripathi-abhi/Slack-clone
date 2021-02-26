import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "emoji-mart/css/emoji-mart.css";
import "./App.css";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Features from "./Components/Features";
import { Container, Main } from "./Components/StyledComponents";
import { auth } from "./firebase";
import darkModeContext from "./Context/DarkModeContext.js";
import db from "./firebase";

function App() {
	const [dark, setDark] = useState(
		localStorage.getItem("darkTheme") === "true" || false
	);
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem("currentUser"))
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

	const signOut = async () => {
		try {
			await auth.signOut();
			localStorage.removeItem("currentUser");
			setUser(null);
		} catch (err) {
			alert(err.message);
		}
	};

	useEffect(() => {
		getChannels();
	}, []);

	return (
		<darkModeContext.Provider value={{ dark, setDark }}>
			<div className="App">
				<Router>
					{!user ? (
						<Login setUser={setUser} />
					) : (
						<Container>
							<Header signOut={signOut} user={user} />
							<Main>
								<Sidebar rooms={rooms} />
								<Switch>
									<Route path="/room/:channelId">
										<Chat user={user} />
									</Route>
									<Route path="/">
										<Features />
									</Route>
								</Switch>
							</Main>
						</Container>
					)}
				</Router>
			</div>
		</darkModeContext.Provider>
	);
}

export default App;
