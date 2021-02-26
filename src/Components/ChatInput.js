import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Picker } from "emoji-mart";
import TextFormatIcon from "@material-ui/icons/TextFormat";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import darkModeContext from "../Context/DarkModeContext";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import StrikethroughSIcon from "@material-ui/icons/StrikethroughS";
import LinkIcon from "@material-ui/icons/Link";
import CodeIcon from "@material-ui/icons/Code";
import SubjectIcon from "@material-ui/icons/Subject";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import OutsideAlerter from "../OutsideAlerter";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import {
	ChatInputContainer,
	InputContainer,
	SendButton,
	Send,
	IconsContainer,
	ChatIcon,
	EmojiPicker,
} from "../StyledComponents/styledChatInput";

const ChatInput = ({ sendMessage }) => {
	const { dark } = useContext(darkModeContext);
	const [message, setMessage] = useState("");
	const [isPickerOpen, setIsPickerOpen] = useState(false);
	const [shift, setShift] = useState(false);

	const addEmoji = emoji => {
		setMessage(message + emoji.native);
	};

	const send = e => {
		e.preventDefault();
		sendMessage(message);
		setMessage("");
	};

	return (
		<ChatInputContainer className={dark ? "darkChatInputContainer" : ""}>
			<InputContainer className={dark ? "darkInputContainer" : ""}>
				<form onSubmit={send}>
					<input
						className={dark ? "darkChatInput" : ""}
						type="text"
						placeholder="Message here..."
						value={message}
						onChange={e => setMessage(e.target.value)}
					/>
					<IconsContainer
						className={`${
							shift ? "shiftIconContainer cursor__pointer" : "cursor__pointer"
						}`}
					>
						<ChatIcon
							onClick={() => setShift(!shift)}
							className={dark ? "darkModeIcons" : ""}
						>
							<TextFormatIcon />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<AlternateEmailIcon fontSize="small" />
						</ChatIcon>
						<OutsideAlerter
							children={
								<ChatIcon className={dark ? "darkModeIcons" : ""}>
									<EmojiPicker>
										{isPickerOpen ? (
											<Picker
												onClick={(emoji, e) => addEmoji(emoji)}
												theme={dark ? "dark" : "light"}
												set={"apple"}
											/>
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
							}
							callback={() => setIsPickerOpen(false)}
						/>

						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<AttachFileIcon fontSize="small" />
						</ChatIcon>
						<SendButton
							onClick={message.length > 0 && send}
							className={`${
								message.length ? "cursor__pointer" : "disableSend"
							} `}
						>
							<Send className={message.length ? "" : "disableSend"} />
						</SendButton>
					</IconsContainer>
				</form>
				<Div
					className={`${shift ? "shiftInputDiv" : ""} ${dark ? "darkDiv" : ""}`}
				>
					<ShirkIconsContainer className={`${shift ? "shiftShrinkIcons" : ""}`}>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<FlashOnIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<FormatBoldIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<FormatItalicIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<StrikethroughSIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<CodeIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<LinkIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<FormatListNumberedIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<FormatListBulletedIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<SubjectIcon fontSize="small" />
						</ChatIcon>
						<ChatIcon className={dark ? "darkModeIcons" : ""}>
							<DeveloperModeIcon fontSize="small" />
						</ChatIcon>
					</ShirkIconsContainer>
				</Div>
			</InputContainer>
		</ChatInputContainer>
	);
};

export default ChatInput;

const Div = styled.div`
	height: 0px;
	display: flex;
	align-items: center;
	background-color: #f0eeee;
	padding-left: 8px;
	transition: all 0.3s;
	.shiftShrinkIcons {
		opacity: 1;
	}
`;

export const ShirkIconsContainer = styled.div`
	opacity: 0;
	display: flex;
	color: rgba(28, 29, 28, 0.7);
	align-items: center;
	cursor: pointer;
	transition: all 0.3s;
	.darkModeIcons {
		color: #a934a9;
		:hover {
			color: black;
			background-color: #a934a9;
		}
	}
`;
