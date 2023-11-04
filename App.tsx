import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from '@expo-google-fonts/inter';

import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_700Bold,
		Inter_400Regular,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<ThemeProvider theme={theme}>
				<AuthProvider>
					<StatusBar style='dark' translucent backgroundColor='transparent' />
					<Routes />
				</AuthProvider>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}
