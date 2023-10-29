import styled from "styled-components";

export const StyledHeader = styled.header`
	padding-top: 60px;

	@media (max-width: 550px) {
		padding-top: 10px;
	}

	@media (max-width: 400px) {
		padding-top: 0;
	}
`;

export const Title = styled.h1`
	display: grid;
	justify-items: center;
	font-size: 50px;
	color: azure;
	text-shadow: 2px 2px 5px rgb(12, 12, 12);

	@media (max-width: 550px) {
		font-size: 44px;
	}

	@media (max-width: 400px) {
		margin: 18px;
		font-size: 32px;
	}
`;
