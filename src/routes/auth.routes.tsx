import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '@screens/SignIn';
import { Register } from '@screens/Register';
import { Home } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name='signIn' component={SignIn} />
			<Screen name='register' component={Register} />
			<Screen name='home' component={Home} />
		</Navigator>
	);
}
