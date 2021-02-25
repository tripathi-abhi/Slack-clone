import React, { useState, useContext } from "react";
import { Picker } from "emoji-mart";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import darkModeContext from "../Context/DarkModeContext";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import {
	ChatInputContainer,
	InputContainer,
	SendButton,
	Send,
	IconsContainer,
	ChatIcon,
	EmojiPicker,
} from "../StyledComponents/styledChatInput";

const ChatInput = () => {
	const { dark } = useContext(darkModeContext);
	const [message, setMessage] = useState("");
	const [isPickerOpen, setIsPickerOpen] = useState(false);

	const handleSubmit = () => {
		setMessage("");
	};

	return (
		<ChatInputContainer className={dark ? "darkChatInputContainer" : ""}>
			<InputContainer className={dark ? "darkInputContainer" : ""}>
				<form onSubmit={handleSubmit}>
					<input
						className={dark ? "darkChatInput" : ""}
						type="text"
						placeholder="Message here..."
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
					<IconsContainer className="cursor__pointer">
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<TextFormatIcon />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<AlternateEmailIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<EmojiPicker>
								{isPickerOpen ? (
									<Picker theme={dark ? "dark" : "light"} set={"apple"} />
								) : (
									""
								)}
							</EmojiPicker>
							<SentimentVerySatisfiedIcon
								onClick={() => setIsPickerOpen(!isPickerOpen)}
								className="emojiIcon"
								fontSize="small"
							/>
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<AttachFileIcon fontSize="small" />
						</ChatIcon>
					</IconsContainer>
					<SendButton
						onClick={handleSubmit}
						className={`${message.length ? "cursor__pointer" : "disableSend"}`}
					>
						<Send className={message.length ? "" : "disableSend"} />
					</SendButton>
				</form>
			</InputContainer>
		</ChatInputContainer>
	);
};

export default ChatInput;
