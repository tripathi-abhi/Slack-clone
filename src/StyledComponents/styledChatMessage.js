import styled from "styled-components";

export const MessageContainer = styled.div`
	.darkSingleMessageContainer {
		:hover {
			background-color: rgba(34, 34, 34);
		}
	}
`;

export const SingleMessageContainer = styled.div`
	padding: 8px 20px;
	display: flex;
	align-items: center;
	height: min-content;
	transition: all 0.4s;
	:hover {
		background-color: rgba(248, 248, 248, 1);
	}
`;

export const UserChatAvatar = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 3px;
	overflow: hidden;
	margin-right: 8px;

	img {
		width: 100%;
	}
`;

export const MessageContent = styled.div`
	display: flex;
	flex-direction: column;
	.darkChatText {
		color: white;
		span {
			color: #b5aeae;
		}
	}
`;

export const Name = styled.span`
	font-weight: 900;
	font-size: 15px;
	color: rgba(29, 28, 29, 1);
	cursor: pointer;
	transition: all 0.4s;
	span {
		margin-left: 8px;
		font-weight: 400;
		color: rgb(97, 96, 97);
		font-size: 12px;
		line-height: 1.4;
		:hover {
			text-decoration: underline;
		}
	}
`;

export const Text = styled.span`
	transition: all 0.4s;
`;
