import React, { useEffect, useState, useRef } from 'react';
import { FlatList } from 'react-native';
import { useAuth } from '@hooks/useAuth';
import {
	BottomSheetView,
	BottomSheetModal,
	BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

import { Load } from '@components/Animations/Load';
import { Filters } from '@components/Controllers/Filters';
import { Order, OrderProps } from '@components/Controllers/Order';
import { Container, Header, Title, Counter, Background } from './styles';
import { apiClient } from './../../../services/api';
import { DetailOrder } from '@components/Forms/DetailOrder';

export function Orders({ setIsNewOrder }: any) {
	const [status, setStatus] = useState('open');
	const [isLoading, setIsLoading] = useState(false);
	const [tickets, setTickets] = useState<OrderProps[]>([]);
	const [filteredTickets, setFilteredTickets] = useState<OrderProps[]>([]);
	const { user } = useAuth();
	const bottomSheetRef = useRef<BottomSheetModal>(null);

	const filterTickets = (status: any, tickets: any) => {
		switch (status) {
			case 'closed':
				return tickets.filter((ticket: any) => ticket.status === 'closed');
			case 'open':
				return tickets.filter(
					(ticket: any) =>
						ticket.status === 'new' || ticket.status === 'assigned'
				);
			default:
				return tickets;
		}
	};

	const fetchTickets = async () => {
		if (
			!user ||
			!user.companies ||
			!user.currentLoggedCompany.currentLoggedCompanyId
		) {
			return;
		}

		try {
			setIsLoading(true);
			const { data } = await apiClient().get('/ticket', {
				params: {
					companyId: user?.currentLoggedCompany.currentLoggedCompanyId,
					currentUserId: user.userId,
				},
			});
			setTickets(data.body);
			const filtered = filterTickets(status, data.body);
			setFilteredTickets(filtered);
		} catch (err) {
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchTickets();
	}, [user, status]);

	const handleOrderPress = () => {
		console.log('clickei');
		setIsNewOrder(false);

		bottomSheetRef.current?.present();
	};

	return (
		<BottomSheetModalProvider>
			<Container>
				<Filters onFilter={setStatus} />

				<Header>
					<Title>Chamados {status === 'open' ? 'abertos' : 'encerrados'}</Title>
					<Counter>{filteredTickets.length}</Counter>
				</Header>

				{isLoading ? (
					<Load />
				) : (
					<FlatList
						data={filteredTickets}
						keyExtractor={(item) => item.id}
						renderItem={({ item }) => (
							<Order data={item} onPress={handleOrderPress} />
						)}
						contentContainerStyle={{ paddingBottom: 100 }}
						showsVerticalScrollIndicator={false}
						style={{ flex: 1 }}
					/>
				)}
			</Container>
			<BottomSheetModal
				ref={bottomSheetRef}
				snapPoints={['50%']}
				style={{ padding: 24 }}
				enablePanDownToClose={true}
				backdropComponent={() => <Background />}
			>
				<BottomSheetView>
					<DetailOrder />
				</BottomSheetView>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
}
