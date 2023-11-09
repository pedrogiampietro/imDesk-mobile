import 'react-native-gesture-handler';

import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as SplashScreen from 'expo-splash-screen';
import {
	useFonts,
	Inter_400Regular,
	Inter_700Bold,
} from '@expo-google-fonts/inter';

import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';
import theme from './src/theme';

// Mantenha a tela de splash visível enquanto os recursos estão carregando
SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_700Bold,
		Inter_400Regular,
	});

	// Oculte a tela de splash quando os recursos estiverem carregados
	useEffect(() => {
		async function prepare() {
			if (fontsLoaded) {
				await SplashScreen.hideAsync();
			}
		}

		prepare();
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null; // Retorne null para evitar renderização enquanto os recursos estão carregando
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
