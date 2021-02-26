import styled from "styled-components";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Link } from "react-router-dom";

export const ChatContainer = styled.div`
	display: grid;
	grid-template-rows: 64px auto min-content;
	transition: all 0.75s ease-in-out;
	min-height: 0;
	.darkChatHeader {
		border-bottom: 1px solid rgba(151, 76, 151, 0.13);
	}
	.darkChannelName {
		color: white;
	}
`;

export const ChatHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid rgba(112, 67, 112, 0.13);
	.darkChatText {
		color: #b5aeae;
	}
`;

export const ChannelDetails = styled.div``;

export const ChannelName = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.3em;
	transition: all 0.3s;
	p {
		font-weight: 700;
		margin-right: 10px;
	}
	.nostar {
		display: none;
	}
	.starChannel {
		display: block;
	}
`;

export const ChannelInfo = styled.div`
	font-weight: 400;
	color: #606060;
	font-size: 13px;
	margin-top: 8px;
	transition: all 0.3s;
`;

export const MoreDetails = styled.div`
	display: flex;
	align-items: center;
	color: #606060;
	transition: all 0.3s;
`;

export const Info = styled(InfoOutlinedIcon)`
	margin-left: 10px;
`;

export const MessagesContainer = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	.darkSingleMessageContainer {
		:hover {
			background-color: rgba(34, 34, 34);
		}
	}
`;

export const StyledLink = styled(Link)`
	margin-bottom: -4px;
	padding: 0;
	color: inherit;
	cursor: pointer;
`;
