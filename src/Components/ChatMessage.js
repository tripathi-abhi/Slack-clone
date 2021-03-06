import React, { useContext } from "react";
import darkModeContext from "../Context/DarkModeContext";
import {
	UserChatAvatar,
	MessageContent,
	Name,
	Text,
	SingleMessageContainer,
} from "../StyledComponents/styledChatMessage";

const ChatMessage = ({ key, text, name, image, time }) => {
	const { dark } = useContext(darkModeContext);
	return (
		<SingleMessageContainer
			key={key}
			className={dark ? "darkSingleMessageContainer" : ""}
		>
			<UserChatAvatar>
				<img src={image} alt="chatUserImg" />
			</UserChatAvatar>
			<MessageContent>
				<Name className={dark ? "darkChatText" : ""}>
					{name} <span>{new Date(time.toDate()).toUTCString()}</span>
				</Name>
				<Text className={dark ? "darkChatText" : ""}>{text}</Text>
			</MessageContent>
		</SingleMessageContainer>
	);
};

export default ChatMessage;
