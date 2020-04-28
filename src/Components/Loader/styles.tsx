import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Backdrop } from '@material-ui/core';

// <Backdrop style={{ color: "#fff", zIndex: 1000 }} open={true}>
// 			<CircularProgress color="inherit" />
// 		</Backdrop>

interface LoaderColors {
	color: string;
}
export const LoaderBlock = styled(Backdrop) <LoaderColors>`
	z-index:1000;
	color:${props => props.color}
`
export const Spiner = styled(CircularProgress).attrs({
	color: 'inherit'
})``


