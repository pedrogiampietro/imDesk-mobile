import React, { useState } from 'react';

import { Container } from './styles';
import { Header } from '@components/Layout/Header';
import { Orders } from '@components/Lists/Orders';
import { NewOrder } from '@components/Controllers/NewOrder';

export function Home() {
	const [isNewOrder, setIsNewOrder] = useState(true);

	return (
		<Container>
			<Header />
			<Orders setIsNewOrder={setIsNewOrder} />
			{isNewOrder && <NewOrder />}
		</Container>
	);
}
