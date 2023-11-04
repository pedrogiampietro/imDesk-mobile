import React, { createContext, useState, useContext, ReactNode } from 'react';
import { apiClient } from '../services/api';

type UserAuth = {
	userId: string;
	name: string;
	email: string;
	isTechnician: boolean;
	avatarUrl?: string;
	companies: {
		companyId: string;
		companyName: string;
	};
	currentLoggedCompany: {
		currentLoggedCompanyId: string;
		currentLoggedCompanyName: string;
	};
};

interface AuthContextData {
	signed: boolean;
	user: UserAuth | null;
	signIn(email: string, password: string, companyId: string): Promise<void>;
	signOut(): void;
}

export const AuthContext = createContext<AuthContextData>(
	{} as AuthContextData
);

export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<UserAuth | null>(null);

	async function signIn(email: string, password: string, companyId: string) {
		const response = await apiClient().post('/authenticate/sign-in', {
			email,
			password,
			companyId,
		});

		const serealizedUser = {
			userId: response.data.id,
			email: response.data.email,
			name: response.data.name,
			isTechnician: response.data.isTechnician,
			avatarUrl: response.data.avatarUrl,
			companies: response.data.companies,
			currentLoggedCompany: {
				currentLoggedCompanyId:
					response.data.currentLogged.currentLoggedCompanyId,
				currentLoggedCompanyName:
					response.data.currentLogged.currentLoggedCompanyName,
			},
		};

		setUser(serealizedUser);
	}

	function signOut() {
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{ signed: Boolean(user), user, signIn, signOut }}
		>
			{children}
		</AuthContext.Provider>
	);
}
