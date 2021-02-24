import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 38px auto;
`;

export const Main = styled.div`
	display: grid;
	grid-template-columns: 260px auto;
`;

// Header Styled

export const HeaderContainer = styled.div`
	background-color: #350d36;
	color: white;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 10px;
	box-shadow: 0 1px 0 0 rgb(255 255 255 /10%);
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

// Sidebar Styled

export const SidebarContainer = styled.div`
	background-color: #3f0e40;
`;

export const WorkspaceContainer = styled.div`
	color: white;
	height: 64px;
	display: flex;
	align-items: center;
	padding-left: 19px;
	justify-content: space-between;
	border-bottom: 1px solid #532753;
`;

export const WorkspaceName = styled.div``;

export const NewMessageButton = styled.div`
	width: 36px;
	height: 36px;
	background-color: white;
	border-radius: 50%50%;
	color: #3f0e40;
	fill: #3f0e40;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 20px;
`;

export const MainChannels = styled.div``;

export const MainChannelItems = styled.div`
	color: rgb(188, 171, 188);
	display: grid;
	grid-template-columns: 15% auto;
	height: 28px;
	align-items: center;
	padding-left: 19px;
	:hover {
		background-color: rgb(52, 14, 54);
	}
`;

export const ChannelsContainer = styled.div`
	color: rgb(188, 171, 188);
`;

export const NewChannelContainer = styled.div`
	display: flex;
	padding: 0px 19px 0px 12px;
	justify-content: space-between;
	align-items: center;
	height: 28px;
`;

export const ChannelList = styled.div``;

export const Channel = styled.div`
	height: 28px;
	display: flex;
	align-items: center;
	padding-left: 19px;
	:hover {
		background-color: rgb(52, 14, 54);
	}
`;

// Login styled

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1.2rem;
	a {
		color: #3f0e40;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
	transition: all 0.75s ease-in-out;
`;

export const ChatContainer = styled.div`
	transition: all 0.75s ease-in-out;
`;

export const ChatChannelContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 5px 10px;
	height: 76px;
	color: #727272;
	border-bottom: 1px solid #b5b3b3;
`;

export const ChannelDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const ChannelName = styled.div`
	display: flex;
	align-items: center;
	font-weight: 600;
	font-size: 1.3em;
	color: black;
	h3 {
		margin-right: 10px;
	}
`;

export const ChannelHeading = styled.div``;

export const MoreDetails = styled.div`
	display: flex;
	align-items: center;
	padding-right: 10px;
	font-size: 1.3em;
`;
