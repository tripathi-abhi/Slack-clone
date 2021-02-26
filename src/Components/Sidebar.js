import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
	SidebarContainer,
	WorkspaceContainer,
	WorkspaceName,
	NewMessageButton,
	MainChannels,
	MainChannelItems,
	ChannelsContainer,
	NewChannelContainer,
	ChannelList,
	Channel,
	ModalBody,
	Form,
} from "../StyledComponents/styledSidebar";
import darkModeConext from "../Context/DarkModeContext";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import { sidebarItemsData } from "../Utils/SidebarUtils";
import CloseIcon from "@material-ui/icons/Close";
import ReactModal from "react-modal";
import db from "../firebase";
import "../Assets/Sidebar.css";

const Sidebar = ({ rooms }) => {
	const { dark } = useContext(darkModeConext);
	const [showModal, setShowModal] = useState(false);
	const [channelName, setChannelName] = useState("");
	const [channelDescription, setChannelDescription] = useState("");

	const history = useHistory();

	const addChannel = async e => {
		e.preventDefault();
		setShowModal(false);
		if (channelName && channelDescription) {
			try {
				await db.collection("rooms").add({
					name: channelName,
					description: channelDescription,
				});
			} catch (err) {
				alert(err.message);
			}
		} else {
			alert(
				`Please enter ${channelName ? "channel description" : "channel name"}`
			);
		}
		setChannelName("");
		setChannelDescription("");
	};

	const gotoChannel = id => {
		if (id) {
			history.push(`/room/${id}`);
		}
	};

	const customStyles = {
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
		},
	};

	return (
		<SidebarContainer className={dark ? "darkSidebar" : ""}>
			<WorkspaceContainer>
				<WorkspaceName>Clever Programmer</WorkspaceName>
				<NewMessageButton
					className={
						dark ? "darkNewMessageButton cursor__pointer" : "cursor__pointer"
					}
				>
					<CreateIcon className="cursor__pointer" />
				</NewMessageButton>
			</WorkspaceContainer>
			<MainChannels>
				{sidebarItemsData.map((item, index) => (
					<MainChannelItems key={index} className="cursor__pointer">
						{item.icon}
						{item.text}
					</MainChannelItems>
				))}
			</MainChannels>
			<ChannelsContainer>
				<NewChannelContainer>
					<div>Channels</div>
					<AddIcon
						className={
							dark
								? "darkAddIcon addIcon cursor__pointer"
								: "addIcon cursor__pointer"
						}
						onClick={() => setShowModal(true)}
					/>
					<ReactModal
						style={customStyles}
						isOpen={showModal}
						contentLabel="Minimal Modal Example"
					>
						<ModalBody>
							<h2>Create New Channel</h2>
							<Form>
								<input
									type="text"
									value={channelName}
									onChange={e => setChannelName(e.target.value)}
									placeholder="Name"
								/>
								<input
									type="text"
									value={channelDescription}
									onChange={e => setChannelDescription(e.target.value)}
									placeholder="Description"
								/>
								<button
									className="modalButton"
									type="submit"
									onClick={addChannel}
								>
									Add Channel
								</button>
							</Form>
							<div
								className="closeModalButton"
								onClick={() => setShowModal(false)}
							>
								<CloseIcon />
							</div>
						</ModalBody>
					</ReactModal>
				</NewChannelContainer>
				<ChannelList>
					{rooms.map(room => (
						<Channel
							onClick={() => gotoChannel(room.id)}
							key={room.id}
							className="cursor__pointer"
						>
							# {room?.data.name}
						</Channel>
					))}
				</ChannelList>
			</ChannelsContainer>
		</SidebarContainer>
	);
};

export default Sidebar;

// import { useState } from "react";
// const ExampleApp = () => {

// 	return (
// 		<div>
// 			<button onClick={() => setShowModal(true)}>Trigger Modal</button>

// 		</div>
// 	);
// };
