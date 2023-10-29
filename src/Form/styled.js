import styled from "styled-components";

export const StyledForm = styled.form`
	padding: 6px 20px;

	@media (max-width: 400px) {
		padding-top: 0;
	}
`;

export const Paragraph = styled.p`
	display: grid;
	grid-template-columns: 1fr 220px;

	@media (max-width: 550px) {
		grid-template-columns: 1fr;
	}
`;

export const ParagraphWithOtherDimensions = styled(Paragraph)`
	margin-top: 36px;

	@media (max-width: 400px) {
		margin-top: 46px;
	}
`;


export const Label = styled.label`
	display: grid;
	align-items: center;

  @media (max-width: 550px) {
    margin-bottom: 10px;
		justify-items: center;
	}

  @media (max-width: 400px) {
    margin-top: -10px;
		font-size: 13px;
	}
`