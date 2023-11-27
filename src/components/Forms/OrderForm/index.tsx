import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {
	FormContainer,
	FormTitle,
	FormLabel,
	FormInput,
	FormPicker,
	FormPickerItem,
	SubmitButton,
} from './styles'; // Import your styled components

export function OrderForm() {
	const [ticketType, setTicketType] = useState('');
	const [ticketCategory, setTicketCategory] = useState('');
	const [ticketPriority, setTicketPriority] = useState('');
	const [ticketLocation, setTicketLocation] = useState('');
	const [description, setDescription] = useState('');
	const [patrimonyTag, setPatrimonyTag] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	// Mock data for Picker - replace with your actual data
	const types = [
		{ id: '1', name: 'Type 1' },
		{ id: '2', name: 'Type 2' },
	];
	const categories = [
		{ id: '1', name: 'Category 1' },
		{ id: '2', name: 'Category 2' },
	];
	const priorities = [
		{ id: '1', name: 'High' },
		{ id: '2', name: 'Low' },
	];
	const locations = [
		{ id: '1', name: 'Location 1' },
		{ id: '2', name: 'Location 2' },
	];

	const handleSubmit = () => {
		setIsLoading(true);
		// API call and submission logic here
		// ...
	};

	return (
		<ScrollView>
			<FormContainer>
				<FormTitle>Novo Chamado</FormTitle>

				<FormLabel>Type</FormLabel>
				<FormPicker
					selectedValue={ticketType}
					onValueChange={(itemValue) => setTicketType(itemValue)}
				>
					{types.map((type) => (
						<FormPickerItem key={type.id} label={type.name} value={type.id} />
					))}
				</FormPicker>

				{/* Repeat similar structure for Category, Priority, and Location */}

				<FormLabel>Descrição</FormLabel>
				<FormInput
					multiline
					numberOfLines={4}
					onChangeText={setDescription}
					value={description}
				/>

				<FormLabel>Patrimônio</FormLabel>
				<FormInput onChangeText={setPatrimonyTag} value={patrimonyTag} />

				<SubmitButton
					title={isLoading ? 'Criando...' : 'Criar Chamado'}
					onPress={handleSubmit}
					disabled={isLoading}
				/>
			</FormContainer>
		</ScrollView>
	);
}
