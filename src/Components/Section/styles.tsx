import styled from 'styled-components';

export const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;
export const Title = styled.span`
	font-size: 3rem;
	font-weight: 600;
	color:white;
`;
export const Grid = styled.div`
	margin-top: 25px;
	display: grid;
	grid-template-columns: repeat(auto-fill, 200px);
	grid-gap: 25px;
`;
