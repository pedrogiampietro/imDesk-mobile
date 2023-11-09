import styled from 'styled-components/native';

export const Container = styled.View`
	width: 100%;
	align-items: center;
`;

export const Title = styled.Text`
	font-size: 24px;
	font-family: ${({ theme }) => theme.FONTS.TITLE};
	color: ${({ theme }) => theme.COLORS.TEXT};
	margin-bottom: 24px;
`;

export const IconView = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding: 10px 0;
`;

export const IconContainer = styled.View`
	align-items: center;
	margin: 0 10px;
`;

export const IconBackground = styled.View`
	background-color: #eee;
	padding: 10px;
	border-radius: 50px;
	align-items: center;
	justify-content: center;
`;

export const DateText = styled.Text`
	margin-top: 8px;
	font-size: 12px;
	color: #333;
`;

export const DashedLine = styled.View`
	height: 1px;
	flex: 1;
	border-bottom-width: 1px;
	border-style: dashed;
	border-bottom-color: #000;
	margin: 0 10px;
`;

export const InfoContainer = styled.View`
	width: 100%;
	padding: 10px 20px;
`;

export const InfoTitle = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: ${({ theme }) => theme.COLORS.TEXT};
	margin-top: 10px;
`;

export const InfoDescription = styled.Text`
	font-size: 14px;
	color: ${({ theme }) => theme.COLORS.SUBTEXT};
	margin-bottom: 10px;
`;
