import React, { useContext } from "react";
import styled from "styled-components";
import darkModeConext from "../Context/DarkModeContext";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { FeaturesData } from "../Utils/FeaturesUtil";

const Features = () => {
	const { dark } = useContext(darkModeConext);
	return (
		<FeatureContainer className={dark ? "darkChatContainer" : ""}>
			<FeatureHeader className={dark ? "darkChatHeader" : ""}>
				<ChannelDetails>
					<ChannelName className={dark ? "darkChannelName" : ""}>
						<p># Features</p>
						<StarBorderOutlinedIcon className="cursor__pointer" />
					</ChannelName>
					<ChannelInfo className={dark ? "darkChatText" : ""}>
						Welcome to Features Channel. Here we see features of my slack.
					</ChannelInfo>
				</ChannelDetails>
				<MoreDetails className={dark ? "darkChatText" : ""}>
					Details
					<Info />
				</MoreDetails>
			</FeatureHeader>
			<FeatureList>
				{FeaturesData.map((feature, index) => (
					<FeatureCard key={index}>
						<CardSide
							className={
								dark
									? "darkFeatureCard cardside cardside__front"
									: " cardside cardside__front"
							}
						>
							<CardImg src={feature.image} alt={feature.name} />
							<CardHeader>{feature.name}</CardHeader>
						</CardSide>
						<CardSide
							className={
								dark
									? "darkFeatureCard cardside cardside__back"
									: " cardside cardside__back"
							}
						>
							<CardText className="card__text">{feature.descr}</CardText>
							<CardHeader>{feature.name}</CardHeader>
						</CardSide>
					</FeatureCard>
				))}
			</FeatureList>
		</FeatureContainer>
	);
};

export default Features;

const FeatureContainer = styled.div`
	display: grid;
	grid-template-rows: 64px auto;
	transition: all 0.75s ease-in-out;
	min-height: 0;
	.darkChatHeader {
		border-bottom: 1px solid rgba(151, 76, 151, 0.13);
	}
	.darkChannelName {
		color: white;
	}
`;

const FeatureHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	border-bottom: 1px solid rgba(112, 67, 112, 0.13);

	.darkChatText {
		color: #b5aeae;
	}
`;

const ChannelDetails = styled.div``;

const ChannelName = styled.div`
	display: flex;
	align-items: center;
	font-size: 1.3em;
	transition: all 0.3s;
	p {
		font-weight: 700;
		margin-right: 10px;
	}
`;

const ChannelInfo = styled.div`
	font-weight: 400;
	color: #606060;
	font-size: 13px;
	margin-top: 8px;
	transition: all 0.3s;
`;

const MoreDetails = styled.div`
	display: flex;
	align-items: center;
	color: #606060;
	transition: all 0.3s ease;
`;

const Info = styled(InfoOutlinedIcon)`
	margin-left: 10px;
`;

const FeatureList = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	overflow-x: hidden;
	overflow-y: scroll;

	.darkFeatureCard {
		background-color: #242424;
		color: white;
		box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
			rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

		.card__text {
			color: rgb(188, 171, 188);
		}
	}
`;

const FeatureCard = styled.div`
	perspective: 150rem;
	-moz-perspective: 150rem;
	position: relative;
	width: 32%;
	min-width: 250px;
	height: 300px;
	margin-bottom: 20px;
	cursor: pointer;

	.cardside {
		width: 100%;
		height: 100%;
		transition: all 0.8s;
		position: absolute;
		top: 0;
		left: 0;
		backface-visibility: hidden;
		border-radius: 5px;
	}

	.cardside__front {
	}

	.cardside__back {
		transform: rotateY(180deg);
	}

	:hover .cardside__front {
		transform: rotateY(180deg);
	}

	:hover .cardside__back {
		transform: rotateY(0deg);
	}
`;

const CardSide = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
		rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const CardImg = styled.img`
	flex: 1;
	padding: 10px 10px 0;
	border-radius: 10px;
`;

const CardHeader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	font-size: 20px;
	height: 50px;
`;

const CardText = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	text-align: center;
	font-weight: 500;
	font-size: 15px;
	padding: 20px;
`;
