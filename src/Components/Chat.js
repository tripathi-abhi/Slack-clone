import React, { useState, useContext, useEffect } from "react";
import {
	ChatContainer,
	ChatHeader,
	ChannelDetails,
	MoreDetails,
	ChannelName,
	ChannelInfo,
	Info,
	MessagesContainer,
} from "../StyledComponents/styledChat";
import ChatInput from "./ChatInput";
import ChatMessageContainer from "./ChatMessage";
import darkModeConext from "../Context/DarkModeContext";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import db from "../firebase";
import firebase from "firebase";
import { useParams } from "react-router-dom";

const Chat = ({ user }) => {
	const { dark } = useContext(darkModeConext);
	const [channel, setChannel] = useState();
	let { channelId } = useParams();
	const [messages, setMessages] = useState();

	const getChannel = () => {
		db.collection("rooms")
			.doc(channelId)
			.onSnapshot(snapshot => {
				setChannel(snapshot.data());
			});
	};

	const getMessages = () => {
		db.collection("rooms")
			.doc(channelId)
			.collection("messages")
			.orderBy("timeStamp", "asc")
			.onSnapshot(snapshot => {
				let messages = snapshot.docs.map(doc => doc.data());
				setMessages(messages);
			});
	};

	const sendMessage = text => {
		if (channelId) {
			let payload = {
				text,
				timeStamp: firebase.firestore.Timestamp.now(),
				user: user.name,
				userImage: user.image,
			};
			db.collection("rooms").doc(channelId).collection("messages").add(payload);
		}
	};

	useEffect(() => {
		getChannel();
		getMessages();
	}, [channelId]);

	return (
		<ChatContainer className={dark ? "darkChatContainer" : ""}>
			<ChatHeader className={dark ? "darkChatHeader" : ""}>
				<ChannelDetails>
					<ChannelName className={dark ? "darkChannelName" : ""}>
						<p># {channel && channel.name}</p>
						<StarBorderOutlinedIcon className="cursor__pointer" />
					</ChannelName>
					<ChannelInfo className={dark ? "darkChatText" : ""}>
						{channel && channel?.description}
					</ChannelInfo>
				</ChannelDetails>
				<MoreDetails className={dark ? "darkChatText" : ""}>
					Details
					<Info />
				</MoreDetails>
			</ChatHeader>
			<MessagesContainer>
				{messages?.length > 0 &&
					messages.map(message => (
						<ChatMessageContainer
							key={message.id}
							text={message.text}
							name={message.user}
							image={message.userImage}
							time={message.timeStamp}
						/>
					))}
			</MessagesContainer>
			<ChatInput sendMessage={sendMessage} />
		</ChatContainer>
	);
};

export default Chat;
