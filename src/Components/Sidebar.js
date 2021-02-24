import React from "react";
import {
	SidebarContainer,
	WorkspaceContainer,
	WorkspaceName,
	NewMessageButton,
	MainChannels,
	MainChannelItems,
	ChannelsContainer,
	NewChannelContainer,
	ChannelList,
	Channel,
} from "./StyledComponents";
import AddIcon from "@material-ui/icons/Add";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { sidebarItemsData } from "../Utils/SidebarUtils";
import { channelsData } from "../Utils/ChannelsUtils";
import "../Assets/Sidebar.css";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<WorkspaceContainer>
				<WorkspaceName>Clever Programmer</WorkspaceName>
				<NewMessageButton>
					<AddCircleOutlineIcon className="cursor__pointer" />
				</NewMessageButton>
			</WorkspaceContainer>
			<MainChannels>
				{sidebarItemsData.map(item => (
					<MainChannelItems className="cursor__pointer">
						{item.icon}
						{item.text}
					</MainChannelItems>
				))}
			</MainChannels>
			<ChannelsContainer>
				<NewChannelContainer>
					<div>Channels</div>
					<AddIcon className="addIcon cursor__pointer" />
				</NewChannelContainer>
				<ChannelList>
					{channelsData.map(channel => (
						<Channel className="cursor__pointer">
							# {channel?.channelName}
						</Channel>
					))}
				</ChannelList>
			</ChannelsContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
