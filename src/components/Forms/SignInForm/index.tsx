import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';

import { FooterButton } from '@components/Controllers/FooterButton';
import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';
import { Form, Title, Footer } from './styles';
import { useAuth } from '../../../hooks/useAuth';
import { apiClient } from '../../../../src/services/api';

interface Company {
	id: string;
	name: string;
}

export function SignInForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [companies, setCompanies] = useState<Company[]>([]);
	const [selectedCompany, setSelectedCompany] = useState<string>('');
	const { signIn } = useAuth();
	const navigation = useNavigation();

	useEffect(() => {
		const fetchCompanies = async () => {
			try {
				const response = await apiClient().get('/companies');

				setCompanies(response.data.companies);
			} catch (error) {
				console.error('Error fetching companies', error);
			}
		};

		fetchCompanies();
	}, []);

	async function handleSignIn() {
		if (!selectedCompany) {
			Alert.alert(
				'Erro',
				'Você precisa selecionar uma empresa para fazer login! 🙋.'
			);

			return;
		}

		setIsLoading(true);
		try {
			await signIn(email, password, selectedCompany);
			navigation.navigate('home');
		} catch (error) {
			console.log(error);
			Alert.alert('Erro', 'Falha ao fazer login. Verifique suas credenciais.');
		} finally {
			setIsLoading(false);
		}
	}

	function handleForgotPassword() {
		// Implemente a função de esqueci a senha aqui
	}

	return (
		<Form>
			<Title>Entrar</Title>
			<Input placeholder='E-mail' onChangeText={setEmail} />
			<Input placeholder='Senha' secureTextEntry onChangeText={setPassword} />
			<Picker
				selectedValue={selectedCompany}
				onValueChange={(itemValue) => setSelectedCompany(itemValue)}
			>
				{companies.map((company: any) => (
					<Picker.Item
						key={company.id}
						label={company.name}
						value={company.id}
					/>
				))}
			</Picker>
			<Button title='Entrar' onPress={handleSignIn} isLoading={isLoading} />

			<Footer>
				<FooterButton
					title='Esqueci senha'
					icon='email'
					onPress={handleForgotPassword}
				/>
			</Footer>
		</Form>
	);
}
