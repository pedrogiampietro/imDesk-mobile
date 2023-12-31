import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
	flex: 1;
	margin-top: 44px;
`;

export const Header = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 22px;
	font-family: ${({ theme }) => theme.FONTS.TITLE};
	color: ${({ theme }) => theme.COLORS.TEXT};
	margin-bottom: 12px;
`;

export const Counter = styled.Text`
	font-size: 14px;
	font-family: ${({ theme }) => theme.FONTS.TEXT};
	color: ${({ theme }) => theme.COLORS.SUBTEXT};
	margin-bottom: 12px;
`;

export const Background = styled.View`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: ${Dimensions.get('window').width}px;
	height: ${Dimensions.get('window').height}px;
	background-color: rgba(0, 0, 0, 0.7);
`;
