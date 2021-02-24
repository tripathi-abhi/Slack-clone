import React, { useContext } from "react";
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
} from "./StyledComponents";
import darkModeConext from "../Context/DarkModeContext";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import WbSunnyOutlinedIcon from "@material-ui/icons/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@material-ui/icons/NightsStayOutlined";

const Header = () => {
	const { dark, setDark } = useContext(darkModeConext);
	const toggle = () => {
		setDark(!dark);
	};
	return (
		<HeaderContainer>
			<ToggleContainer onClick={toggle} className="cursor__pointer">
				{dark ? <NightsStayOutlinedIcon /> : <WbSunnyOutlinedIcon />}
			</ToggleContainer>
			<MainHeader>
				<AccessTimeIcon className="cursor__pointer" />
				<SearchContainer>
					<SearchBox>
						<IconBox>
							<SearchIcon />
						</IconBox>
						<input type="text" placeholder="Search ... " />
					</SearchBox>
				</SearchContainer>
				<HelpOutlineIcon className="cursor__pointer" />
			</MainHeader>
			<UserContainer>
				<UserName>Abhishek</UserName>
				<UserAvatar className="cursor__pointer">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2JI-YAizHPtrRIs_4Byg_nUnrGB-2ROdlg&usqp=CAU"
						alt="User_Avatar"
					/>
					<FiberManualRecordIcon className="online__icon" />
				</UserAvatar>
			</UserContainer>
		</HeaderContainer>
	);
};

export default Header;
