import styled from "styled-components";

export const SidebarContainer = styled.div`
	background-color: #3f0e40;
	transition: all 0.5s;
`;

export const WorkspaceContainer = styled.div`
	color: white;
	height: 64px;
	display: flex;
	align-items: center;
	padding-left: 19px;
	justify-content: space-between;
	border-bottom: 1px solid #532753;
	.darkNewMessageButton {
		background-color: #a934a9;
		color: black;
	}
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
	transition: all 0.5s;
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
	.addIcon {
		border-radius: 50%;
		transition: all 0.15s;
	}
	.darkAddIcon {
		:hover {
			background-color: #161616;
			color: #a934a9;
		}
	}
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

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 300px;
	input {
		height: 30px;
		width: 90%;
		margin: 10px;
		border-radius: 5px;
		padding: 1px 4px;
		font-size: 15px;
		border: none;
		box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
		:focus {
			outline: none;
		}
	}

	.modalButton {
		margin-top: 20px;
		background-color: white;
		color: #61bb4e;
		border: 1px solid #61bb4e;
		height: 40px;
		border-radius: 4px;
		font-size: 15px;
		font-weight: 600;
		cursor: pointer;
		padding: 10px;
		transition: all 0.3s;
		:hover {
			background-color: #61bb4e;
			color: white;
		}
		:focus {
			outline: none;
		}
	}
`;

export const ModalBody = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h2 {
		margin-bottom: 10px;
	}
	.closeModalButton {
		cursor: pointer;
		position: absolute;
		top: 0;
		right: 0;
		padding: 5px;
	}
`;
