import React, { useContext } from "react";
import {
	ChatContainer,
	ChatChannelContainer,
	ChannelDetails,
	MoreDetails,
	ChannelName,
	ChannelHeading,
} from "./StyledComponents";
import darkModeConext from "../Context/DarkModeContext";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const Chat = () => {
	const { dark } = useContext(darkModeConext);
	return (
		<ChatContainer
			className={dark ? "darkTheme chatContainer" : "chatContainer"}
		>
			<ChatChannelContainer>
				<ChannelDetails>
					<ChannelName
						className={dark ? "darkTheme channelName" : "channelName"}
					>
						<h3># General</h3>
						<StarBorderOutlinedIcon />
					</ChannelName>
					<ChannelHeading>Welcome to General Channel</ChannelHeading>
				</ChannelDetails>
				<MoreDetails>
					Details
					<InfoOutlinedIcon />
				</MoreDetails>
			</ChatChannelContainer>
		</ChatContainer>
	);
};

export default Chat;
