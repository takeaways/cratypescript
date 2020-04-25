import styled from 'styled-components';
import { BackgroundImageTypes } from './index.d';

export const Cotainer = styled.div`
	height: calc(100vh - 50px);
	width: 100%;
	position: relative;
	padding: 50px;
`;
export const Backdrop = styled.div<BackgroundImageTypes>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(2px);
	opacity: 0.5;
	z-index: 0;
`;

export const Content = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	z-index: 1;
	height: 100%;
`;

export const Cover = styled.div<BackgroundImageTypes>`
	width: 30%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	border-radius: 5px;
`;

export const Data = styled.div`
	width: 70%;
	margin-left: 10px;
`;

export const Title = styled.h3`
	font-size: 2rem;
	margin-bottom: 10px;
`;
export const ItemContainer = styled.div`
	margin: 20px;
`;
export const Item = styled.span``;
export const Divier = styled.span`
	margin: 0 10px;
`;
export const Overview = styled.p`
	font-size: 12px;
	opacity: 0.7;
	line-height: 1.5;
	width: 50%;
`;
