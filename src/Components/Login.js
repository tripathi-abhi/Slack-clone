import React from "react";
import { auth, provider } from "../firebase";
import {
	LoginContainer,
	SlackImg,
	LoginContent,
	SignInButton,
} from "../StyledComponents/styledLogin";

const Login = ({ setUser }) => {
	const signIn = async () => {
		try {
			const result = await auth.signInWithPopup(provider);
			const newUser = {
				name: result.user.displayName,
				image: result.user.photoURL,
			};
			localStorage.setItem("currentUser", JSON.stringify(newUser));
			setUser(newUser);
		} catch (err) {
			alert(err.message);
		}
	};

	return (
		<LoginContainer>
			<LoginContent>
				<SlackImg
					src="https://stormotion.io/blog/content/images/2018/12/developer.gif"
					alt="slack__img"
				/>
				<h1>Welcome To My Slack</h1>
				<SignInButton onClick={signIn} className="cursor__pointer">
					Sign In With Google
				</SignInButton>
			</LoginContent>
		</LoginContainer>
	);
};

export default Login;
