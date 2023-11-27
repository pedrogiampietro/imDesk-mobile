import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const FormContainer = styled.View`
	padding: 20px;
	margin: 20px;
`;

export const FormTitle = styled.Text`
	font-size: 24px;
	font-family: ${({ theme }) => theme.FONTS.TITLE};
	color: ${({ theme }) => theme.COLORS.TEXT};
	margin-bottom: 24px;
	align-self: center;
`;

export const FormLabel = styled.Text`
	font-size: 16px;
	margin-top: 10px;
	margin-bottom: 5px;
	color: ${({ theme }) => theme.COLORS.LABEL};
`;

export const FormInput = styled.TextInput`
	border-width: 1px;
	border-color: grey;
	padding: 10px;
	margin-bottom: 15px;
	border-radius: 5px;
`;

export const FormPicker = styled(Picker)`
	margin-bottom: 15px;
`;

export const FormPickerItem = styled(Picker.Item)`
	/* Customize your picker item style */
`;

export const SubmitButton = styled.Button`
	/* Customize your button style */
`;
