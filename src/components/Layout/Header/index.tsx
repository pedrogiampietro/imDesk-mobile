import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { LogoutButton } from '@components/Controllers/LogoutButton';
import { Container, Greeting, Title, SubTitle } from './styles';

export function Header() {
	const { signOut } = useAuth();

	return (
		<Container>
			<Greeting>
				<Title>imDesk</Title>
				<SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
			</Greeting>

			<LogoutButton onPress={() => signOut()} />
		</Container>
	);
}
