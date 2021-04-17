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
import { ToastContainer, toast } from "react-toastify";
import darkModeConext from "../Context/DarkModeContext";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import AddIcon from "@material-ui/icons/Add";
import CreateIcon from "@material-ui/icons/Create";
import { sidebarItemsData } from "../Utils/SidebarUtils";
import CloseIcon from "@material-ui/icons/Close";
import ReactModal from "react-modal";
import db from "../firebase";
import "react-toastify/dist/ReactToastify.css";
import "../Assets/Sidebar.css";

const Sidebar = ({ rooms }) => {
	const { dark } = useContext(darkModeConext);
	const [showModal, setShowModal] = useState(false);
	const [channelName, setChannelName] = useState("");
	const [channelDescription, setChannelDescription] = useState("");
	const [star, setStar] = useState(false);

	const history = useHistory();

	const addChannel = async e => {
		console.log(star);
		e.preventDefault();
		setShowModal(false);
		if (channelName && channelDescription) {
			try {
				await db.collection("rooms").add({
					name: channelName,
					description: channelDescription,
					star: star,
				});
				toast.info("Channel added");
			} catch (err) {
				toast.error(err.message);
			}
		} else {
			toast.error(
				`Please enter ${channelName ? "channel description" : "channel name"}`
			);
		}
		setChannelName("");
		setChannelDescription("");
		setStar(false);
	};

	const deleteChannel = async id => {
		try {
			await db.collection("rooms").doc(id).delete();
		} catch (err) {
			alert(err.message);
		}
	};

	const gotoChannel = id => {
		if (id) {
			history.push(`/room/${id}`);
		}
	};

	const customStyles = {
		overlay: {
			background: "rgba(0,0,0,0.6)",
		},
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
		<SidebarContainer className={dark ? "darkSidebar sidebar" : "sidebar"}>
			<ToastContainer autoClose={3000} hideProgressBar={true} />
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
								<div className="modalCheckbox">
									<input
										type="checkbox"
										checked={star}
										onChange={e => setStar(e.target.checked)}
									></input>
									<label for="vehicle1">Mark this as starred channel</label>
								</div>
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
							<DeleteForeverIcon
								className="deleteRoomButton"
								onClick={() => deleteChannel(room.id)}
								style={{ margin: "0 19px 0 auto" }}
							/>
						</Channel>
					))}
				</ChannelList>
			</ChannelsContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
