import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Chat from "./Components/Chat";
import Login from "./Components/Login";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { Container, Main } from "./Components/StyledComponents";
import darkModeContext from "./Context/DarkModeContext.js";

function App() {
	const [dark, setDark] = useState(localStorage.getItem("darkTheme") || false);
	return (
		<darkModeContext.Provider value={{ dark, setDark }}>
			<div className="App">
				<Router>
					<Container>
						<Header />
						<Main>
							<Sidebar />
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
