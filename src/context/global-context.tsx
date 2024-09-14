import React, { createContext, useState, ReactNode, useContext } from "react";

export interface GlobalContextType {
	numberOfCards: number;
	setNumberOfCards: React.Dispatch<React.SetStateAction<number>>;
	isModal: boolean;
	setIsModal: React.Dispatch<React.SetStateAction<boolean>>;
	userName: string;
	setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
	children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
	children,
}) => {
	const [numberOfCards, setNumberOfCards] = useState<number>(7);
	const [isModal, setIsModal] = useState(false);
	const [userName, setUserName] = useState("");

	return (
		<GlobalContext.Provider
			value={{
				numberOfCards,
				setNumberOfCards,
				isModal,
				setIsModal,
				userName,
				setUserName,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export function useGlobalContext() {
	const context = useContext(GlobalContext);
	if (context === undefined) {
		throw new Error(
			"useGlobalContext must be used within a GlobalContextProvider",
		);
	}
	return context;
}

export default GlobalContext;
