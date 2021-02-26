import styled from "styled-components";

export const LoginContainer = styled.div`
	width: 100%;
	height: 100vh;
	background-color: #f8f8f8;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const LoginContent = styled.div`
	background-color: white;
	padding: 80px;
	border-radius: 7px;
	box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const SlackImg = styled.img`
	height: 250px;
	margin-bottom: 20px;
`;

export const SignInButton = styled.button`
	margin-top: 50px;
	background-color: white;
	color: #301934;
	border: 1px solid #301934;
	height: 40px;
	border-radius: 4px;
	font-size: 15px;
	font-weight: 600;
	padding: 10px;
	transition: all 0.3s;
	:hover {
		background-color: #301934;
		color: white;
	}
	:focus {
		outline: none;
	}
`;
