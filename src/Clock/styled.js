import styled from 'styled-components';

export const StyledClock = styled.div`
	display: flex;
	justify-content: flex-end;
	margin: 0;
	font-family: monospace;
	color: gray;

@media (max-width: 550px) {
		justify-content: center;
}

@media (max-width: 440px) {
	font-size: 12px;
}

@media (max-width: 380px) {
	font-size: 10px;
}
`