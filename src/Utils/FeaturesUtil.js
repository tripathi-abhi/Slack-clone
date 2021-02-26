import add__channel from "../Assets/images/image1.png";
import feature__cards from "../Assets/images/Screenshot (376).png";
import dark__mode from "../Assets/images/Screenshot (374).png";
import live__chat from "../Assets/images/Screenshot (375).png";
import emoji from "../Assets/images/Screenshot (373).png";
import animation from "../Assets/images/Screenshot (372).png";

export const FeaturesData = [
	{
		name: "Feature Cards",
		descr:
			"The features of slack clone app are described in the Feature section.",
		image: feature__cards,
	},
	{
		name: "Dark Mode",
		descr:
			"The app has Dark/Light mode toggler at the left top corner. The properties of the app metamorphs into a beautiful dark mode.",
		image: dark__mode,
	},
	{
		name: "Add Channel",
		descr:
			"All the channels are listed on the left side of the screen. It also has a feature to add new channels given its name and description.",
		image: add__channel,
	},
	{
		name: "Live Chat",
		descr:
			"The app supports live chat with the help of realtime databse of firebase firestore.",
		image: live__chat,
	},
	{
		name: "Emoji Support",
		descr: "The app has chat input buttons with all the emojis you may need.",
		image: emoji,
	},
	{
		name: "Attractive animations",
		descr:
			"Attractive flipping, shifting and transition animations on disable, hover, etc. make this app more special",
		image: animation,
	},
];
