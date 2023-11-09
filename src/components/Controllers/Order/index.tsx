import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { formatarData } from '../../../utils/dateTime';
import { TouchableOpacity } from 'react-native';

import {
	Container,
	Status,
	Content,
	Header,
	Title,
	Label,
	Info,
	Footer,
	OrderStyleProps,
} from './styles';

export type OrderProps = OrderStyleProps & {
	id: string;
	description: string;
	observationServiceExecuted?: string;
	assignedTo: string[];
	equipaments: string[];
	images: string[];
	assignedToAt: Date | null;
	ticketWasSignedTech: boolean | false;
	ticketWasSignedUser: boolean | false;
	closedBy: string | null;
	closedAt: Date;
	status: string;
	timeEstimate: Date | null;
	isDelay: boolean;
	userId: string;
	createdAt: Date;
	updatedAt: Date;
	slaDefinitionId: number;
	ticketCategory: {
		id: string;
		name: string;
		childrenName: string;
		defaultText: string | null;
	};
	ticketLocation: {
		id: string;
		name: string;
	};
	ticketPriority: {
		id: string;
		name: string;
	};
	ticketType: {
		id: string;
		name: string;
	};
	User: {
		id: string;
		username: string;
		name: string;
		email: string;
		password: string;
		phone: string;
		ramal: string;
		sector: string;
		createdAt: Date;
		updatedAt: Date;
	};
	TicketEvaluation: TicketEvaluation[];
	usedItems: usedItems[];
	equipmentUsage: equipment[];
};

type equipment = {
	equipmentId: string;
	usageCount: number;
	equipmentPatrimony: string;
};

type usedItems = {
	cost: number;
	id: string;
	name: string;
	quantity: number;
};

type TicketEvaluation = {
	id: string;
	rating: number;
};

type Props = {
	data: OrderProps;
	onPress: () => void;
};

export function Order({ data, onPress }: Props) {
	const theme = useTheme();

	return (
		<TouchableOpacity onPress={onPress}>
			<Container>
				<Status status={data.status} />

				<Content>
					<Header>
						<Title>{data.ticketCategory.childrenName}</Title>
						<MaterialIcons
							name={data.status === 'new' ? 'hourglass-empty' : 'check-circle'}
							size={24}
							color={
								data.status === 'new'
									? theme.COLORS.SECONDARY
									: theme.COLORS.PRIMARY
							}
						/>
					</Header>

					<Footer>
						<Info>
							<MaterialIcons
								name='schedule'
								size={16}
								color={theme.COLORS.SUBTEXT}
							/>
							<Label>{formatarData(String(data.createdAt))}</Label>
						</Info>

						<Info>
							<MaterialIcons
								name='my-location'
								size={16}
								color={theme.COLORS.SUBTEXT}
							/>
							<Label>{data.ticketLocation.name}</Label>
						</Info>
					</Footer>
				</Content>
			</Container>
		</TouchableOpacity>
	);
}
