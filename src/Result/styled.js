import styled, { css } from "styled-components";

export const ResultInfo = styled.div`
	position: relative;
	display: grid;
	justify-items: center;
	margin: -150px auto;
	padding: 50px 40px 0;
	max-width: 500px;
	border-radius: 20px;
	background: rgb(20, 120, 100);
	box-shadow: 0 0 5px rgb(12, 12, 12);
	transition: margin-top 0.5s;
	z-index: -1;

	@media (max-width: 400px) {
		padding: 40px 20px 0;
	}

	${({ $showResult }) => $showResult && css`
			margin-top: 0;

			@media (max-width: 550px) {
				margin-top: 0;
			}

			@media (max-width: 400px) {
				margin-top: -12px;
			}
		`}
`;

export const Info = styled.p`
font-size: 12px;

@media (max-width: 400px) {
		margin-top: 8px;
		font-size: 11px;
	}
`;

export const Calculation = styled(Info)`
	margin: 0;
	font-size: 40px;
	font-weight: bold;
	color: azure;
	text-align: center;

    @media (max-width: 550px) {
		font-size: 28px;
	}

@media (max-width: 400px) {
	margin-top: 8px;
		font-size: 22px;
	}
`;