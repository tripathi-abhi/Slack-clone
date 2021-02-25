import React, { useContext } from "react";
import darkModeContext from "../Context/DarkModeContext";
import {
	MessageContainer,
	UserChatAvatar,
	MessageContent,
	Name,
	Text,
	SingleMessageContainer,
} from "../StyledComponents/styledChatMessage";

const ChatMessage = () => {
	const { dark } = useContext(darkModeContext);
	return (
		<MessageContainer>
			<SingleMessageContainer
				className={dark ? "darkSingleMessageContainer" : ""}
			>
				<UserChatAvatar>
					<img
						src="https://randomuser.me/api/portraits/women/64.jpg"
						alt="chatUserImg"
					/>
				</UserChatAvatar>
				<MessageContent>
					<Name className={dark ? "darkChatText" : ""}>
						Abhishek <span>2/23/2021 1:25:15 AM</span>
					</Name>
					<Text className={dark ? "darkChatText" : ""}>
						Let's get going dude!
					</Text>
				</MessageContent>
			</SingleMessageContainer>
		</MessageContainer>
	);
};

export default ChatMessage;
