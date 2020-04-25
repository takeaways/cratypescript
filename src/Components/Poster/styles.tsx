import styled from 'styled-components';
import { ImageTypes } from './index.d';

export const Container = styled.div`
	font-size: 12px;
`;
export const Rating = styled.span`
	bottom: 5px;
	right: 5px;
	position: absolute;
	opacity: 0;
`;

export const Image = styled.div<ImageTypes>`
	height: 180px;
	background-size: cover;
	border-radius: 5px;

	background-position: center center;
	transition: opacity 0.2s ease-in-out;
	background-image: url(${(props) =>	`https://image.tmdb.org/t/p/w300/` + props.bgUrl});
`;

export const ImageContainer = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		${Image} {
			opacity: 0.3;
		}
		${Rating} {
			opacity: 1;
		}
	}
`;

export const Title = styled.span`
	display: block;
	font-size: 12px;
	margin-bottom: 2px;
`;
export const Year = styled.span`
	font-size: 10px;
	color: rgba(255, 255, 255, 0.5);
`;
