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
