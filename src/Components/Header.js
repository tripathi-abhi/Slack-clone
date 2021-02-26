import React, { useContext, useEffect, useState } from "react";
import {
	HeaderContainer,
	MainHeader,
	UserContainer,
	SearchContainer,
	SearchBox,
	UserAvatar,
	UserName,
	IconBox,
	ToggleContainer,
} from "../StyledComponents/styledHeader";
import OutsideAlerter from "../OutsideAlerter";
import darkModeConext from "../Context/DarkModeContext";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SearchIcon from "@material-ui/icons/Search";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";
import styled from "styled-components";

const Header = ({ user, signOut }) => {
	const { dark, setDark } = useContext(darkModeConext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggle = () => {
		setDark(!dark);
	};

	useEffect(() => {
		localStorage.setItem("darkTheme", dark);
	}, [dark]);

	return (
		<HeaderContainer className={dark ? "darkHeader" : ""}>
			<ToggleContainer onClick={toggle} className="cursor__pointer">
				{dark ? <NightsStayOutlinedIcon /> : <WbSunnyOutlinedIcon />}
			</ToggleContainer>
			<MainHeader>
				<AccessTimeIcon className="cursor__pointer" />
				<SearchContainer>
					<SearchBox className={dark ? "darkSearchBox" : ""}>
						<IconBox>
							<SearchIcon />
						</IconBox>
						<input type="text" placeholder="Search ... " />
					</SearchBox>
				</SearchContainer>
				<HelpOutlineIcon className="cursor__pointer" />
			</MainHeader>

			<OutsideAlerter
				children={
					<UserContainer>
						<UserName>{user.name}</UserName>
						<UserAvatar
							onClick={() => {
								setIsMenuOpen(!isMenuOpen);
							}}
							className="cursor__pointer"
						>
							<img
								src={user.image || "https://i.imgur.com/6VBx3io.png"}
								alt="User_Avatar"
							/>
							<FiberManualRecordIcon className="online__icon" />
						</UserAvatar>
						<MenuContainer className={isMenuOpen ? "openMenu" : ""}>
							<li
								onClick={() => {
									setIsMenuOpen(false);
									signOut();
								}}
							>
								Logout <ExitToAppIcon style={{ margin: "0px 5px" }} />
							</li>
						</MenuContainer>
					</UserContainer>
				}
				callback={() => setIsMenuOpen(false)}
			/>
		</HeaderContainer>
	);
};

export default Header;

const MenuContainer = styled.ul`
	background-color: #471248;
	position: absolute;
	padding: 8px 0px;
	top: 36px;
	right: 20px;
	list-style: none;
	width: 120px;
	color: #bcbbac;
	text-align: center;
	transition: all 0.5s;
	display: none;
	li {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		cursor: pointer;
		:hover {
			background-color: rgb(52, 14, 58);
		}
	}
`;
