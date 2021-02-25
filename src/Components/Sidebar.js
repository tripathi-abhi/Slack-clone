import React, { useContext } from "react";
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
} from "../StyledComponents/styledSidebar";
import darkModeConext from "../Context/DarkModeContext";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import { sidebarItemsData } from "../Utils/SidebarUtils";
import swal from "sweetalert";
import db from "../firebase";
import "../Assets/Sidebar.css";

const Sidebar = ({ rooms }) => {
	const { dark } = useContext(darkModeConext);

	const addChannel = async () => {
		const name = await swal("Enter channel name", {
			content: "input",
			button: {
				text: "Add Room",
			},
		});
		if (name) {
			db.collection("rooms").add({
				name,
			});
		}
	};

	return (
		<SidebarContainer className={dark ? "darkSidebar" : ""}>
			<WorkspaceContainer>
				<WorkspaceName>Clever Programmer</WorkspaceName>
				<NewMessageButton
					className={
						dark ? "darkNewMessageButton cursor__pointer" : "cursor__pointer"
					}
				>
					<CreateIcon className="cursor__pointer" />
				</NewMessageButton>
			</WorkspaceContainer>
			<MainChannels>
				{sidebarItemsData.map((item, index) => (
					<MainChannelItems key={index} className="cursor__pointer">
						{item.icon}
						{item.text}
					</MainChannelItems>
				))}
			</MainChannels>
			<ChannelsContainer>
				<NewChannelContainer>
					<div>Channels</div>
					<AddIcon
						className={
							dark
								? "darkAddIcon addIcon cursor__pointer"
								: "addIcon cursor__pointer"
						}
						onClick={addChannel}
					/>
				</NewChannelContainer>
				<ChannelList>
					{rooms.map(room => (
						<Channel key={room.id} className="cursor__pointer">
							# {room?.data.name}
						</Channel>
					))}
				</ChannelList>
			</ChannelsContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
