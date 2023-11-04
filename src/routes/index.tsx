import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from '@screens/Home';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/useAuth';

export function Routes() {
	const { signed } = useAuth();

	return (
		<NavigationContainer>
			{signed ? <Home /> : <AuthRoutes />}
		</NavigationContainer>
	);
}
