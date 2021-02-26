import styled from "styled-components";
import SendIcon from "@material-ui/icons/Send";

export const ChatInputContainer = styled.div`
	position: relative;
	padding: 0px 20px 24px;
	.darkInputContainer {
		border: 1px solid #a934a9;
		.disableSend {
			color: #a934a9;
		}
	}
`;

export const InputContainer = styled.div`
	border: 1px solid #80808e;
	border-radius: 4px;
	form {
		display: flex;
		height: 42px;
		align-items: center;
		padding-left: 10px;
		input {
			flex: 1;
			border: none;
			font-size: 15px;
			background-color: transparent;
			:focus {
				outline: none;
			}
		}
		.darkChatInput {
			color: white;
		}
		.disableSend {
			color: #80808e;
			background-color: transparent;
		}
		.shiftIconContainer {
			transform: translatey(2.67rem);
		}
	}
	.darkDiv {
		background-color: transparent;
	}
	.shiftInputDiv {
		height: 42px;
	}
`;

export const IconsContainer = styled.div`
	display: flex;
	color: rgba(28, 29, 28, 0.7);
	align-items: center;
	transition: all 0.35s;
	.darkModeIcons {
		color: #a934a9;
		:hover {
			color: black;
			background-color: #a934a9;
		}
	}
`;

export const ChatIcon = styled.div`
	padding: 5px;
	transition: all 0.3s;
	border-radius: 3px;
	:hover {
		color: rgba(28, 29, 28, 1);
		background-color: rgba(17, 17, 17, 0.2);
	}
`;

export const EmojiPicker = styled.div`
	position: absolute;
	bottom: 66px;
	right: 0;
	.emoji-mart {
		.emoji-mart-scroll::-webkit-scrollbar {
			display: none;
		}
		.emoji-mart-preview {
			display: none;
		}
	}
`;

export const SendButton = styled.div`
	background-color: #007a5a;
	border-radius: 2px;
	width: 32px;
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-right: 5px;
	transition: all 0.5s;
	.MuiSvgIcon-root {
		width: 18px;
	}

	:hover {
		background: #148567;
	}
`;

export const Send = styled(SendIcon)`
	color: white;
`;
