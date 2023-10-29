import styled from "styled-components";

export const Main = styled.main`
	margin: 50px auto;
	padding: 8px 28px;
	max-width: 600px;
	height: 380px;
	background-color: rgb(210, 210, 210);
	border-radius: 20px;
	box-shadow: 0 0 5px rgb(12, 12, 12);
	z-index: 1;

	@media (max-width: 640px) {
		margin: 50px 20px;
	}

	@media (max-width: 550px) {
		margin-top: 0;
		height: 460px;
	}

	@media (max-width: 400px) {
		padding: 6px;
		height: 376px;
	}
`;
