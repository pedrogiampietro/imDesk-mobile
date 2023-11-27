import React from 'react';
import { OrderProps } from '@components/Controllers/Order';
import {
	Container,
	Title,
	IconView,
	DashedLine,
	IconBackground,
	DateText,
	IconContainer,
	InfoContainer,
	InfoTitle,
	InfoDescription,
} from './styles';
import Icon from '@expo/vector-icons/MaterialIcons';

export function DetailOrder({ order }: { order: OrderProps | null }) {
	if (!order) {
		return (
			<InfoDescription>Select an order to see the details.</InfoDescription>
		);
	}
	return (
		<Container>
			<Title>Detalhe</Title>
			<IconView>
				<IconContainer>
					<IconBackground>
						<Icon name='hourglass-empty' size={24} color='#000' />
					</IconBackground>
					<DateText>08:00 10/11/2023</DateText>
				</IconContainer>

				<DashedLine />

				<IconContainer>
					<IconBackground>
						<Icon name='check-circle' size={24} color='#000' />
					</IconBackground>
					<DateText>09:30 10/11/2023</DateText>
				</IconContainer>
			</IconView>
			<InfoContainer>
				<InfoTitle>Category</InfoTitle>
				<InfoDescription>Office Supplies</InfoDescription>

				<InfoTitle>Asset Number</InfoTitle>
				<InfoDescription>12345</InfoDescription>

				<InfoTitle>Description</InfoTitle>
				<InfoDescription>
					This is a detailed description of the asset...
				</InfoDescription>
			</InfoContainer>
		</Container>
	);
}
