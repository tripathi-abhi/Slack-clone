import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 38px minmax(0, 1fr);
	.darkHeader {
		background-color: #0c0c0c;
		color: #a934a9;
	}
	.darkSidebar {
		background-color: #0e0e0e;
	}
	.darkChatContainer {
		background-color: rgb(18, 18, 18);
	}
`;

export const Main = styled.div`
	display: grid;
	grid-template-columns: 260px auto;
`;
