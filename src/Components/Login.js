import React, { useContext } from "react";
import darkModeConext from "../Context/DarkModeContext";
import { LoginContainer } from "../StyledComponents/styledLogin";

const Login = () => {
	const { dark } = useContext(darkModeConext);
	return (
		<LoginContainer className={dark ? "darkLoginContainer" : "loginContainer"}>
			<h1>LOGIN</h1>
			<p>
				Click <a href="/room">here</a> to see my channel room.
			</p>
		</LoginContainer>
	);
};

export default Login;
