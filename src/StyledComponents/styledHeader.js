import styled from "styled-components";

export const HeaderContainer = styled.div`
	background-color: #350d36;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 10px;
	box-shadow: 0 1px 0 0 rgb(255 255 255 /10%);
	transition: all 0.5s;
`;

export const ToggleContainer = styled.div`
	padding-left: 19px;
`;

export const MainHeader = styled.div`
	display: flex;
	margin-left: 16px;
	margin-right: 16px;
`;

export const SearchContainer = styled.div`
	min-width: 400px;
	margin-left: 16px;
	margin-right: 16px;

	.darkSearchBox {
		box-shadow: inset 0 0 0 1px #a934a9;
	}
`;

export const SearchBox = styled.div`
	display: flex;
	align-items: center;
	box-shadow: inset 0 0 0 1px rgba(104, 74, 104, 1);
	border-radius: 4px;
	padding-left: 8px;
	input {
		width: 100%;
		border: none;
		background-color: transparent;
		color: white;
		padding: 4px 8px;
		:focus {
			outline: none;
		}
	}
`;

export const IconBox = styled.div`
	display: flex;
	padding: 1px;
	color: rgba(104, 74, 104, 1);
`;

export const UserContainer = styled.div`
	display: flex;
	align-items: center;
	padding-right: 16px;
	/* position: absolute; */
	/* right: 0; */
`;

export const UserName = styled.div`
	font-weight: 500;
	padding-right: 16px;
`;

export const UserAvatar = styled.div`
	position: relative;
	width: 29px;
	height: 29px;
	img {
		width: 100%;
		border-radius: 3px;
	}
	.online__icon {
		border: 2px solid #350d36;
		border-radius: 50%;
		fill: green;
		background-color: green;
		position: absolute;
		bottom: -4px;
		right: -4px;
		font-size: 12px;
	}
`;
