import React, { useContext } from "react";
import {
	ChatContainer,
	ChatHeader,
	ChannelDetails,
	MoreDetails,
	ChannelName,
	ChannelInfo,
	Info,
} from "../StyledComponents/styledChat";
import ChatInput from "./ChatInput";
import ChatMessageContainer from "./ChatMessage";
import darkModeConext from "../Context/DarkModeContext";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";

const Chat = () => {
	const { dark } = useContext(darkModeConext);
	return (
		<ChatContainer className={dark ? "darkChatContainer" : ""}>
			<ChatHeader className={dark ? "darkChatHeader" : ""}>
				<ChannelDetails>
					<ChannelName className={dark ? "darkChannelName" : ""}>
						<p># General</p>
						<StarBorderOutlinedIcon className="cursor__pointer" />
					</ChannelName>
					<ChannelInfo className={dark ? "darkChatText" : ""}>
						Welcome to General Channel
					</ChannelInfo>
				</ChannelDetails>
				<MoreDetails className={dark ? "darkChatText" : ""}>
					Details
					<Info />
				</MoreDetails>
			</ChatHeader>
			<ChatMessageContainer />
			<ChatInput />
		</ChatContainer>
	);
};

export default Chat;
