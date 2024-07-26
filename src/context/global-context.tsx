import React, { createContext, useState, ReactNode, useContext } from "react";

export interface GlobalContextType {
	numberOfCards: number;
	setNumberOfCards: React.Dispatch<React.SetStateAction<number>>;
	rangeValues: number[];
	setRangeValues: React.Dispatch<React.SetStateAction<number[]>>;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
	children: ReactNode;
}

export const GlobalContextProvider: React.FC<GlobalProviderProps> = ({
	children,
}) => {
	const [numberOfCards, setNumberOfCards] = useState<number>(10);
	const [rangeValues, setRangeValues] = useState<number[]>([120]);

	return (
		<GlobalContext.Provider
			value={{ numberOfCards, setNumberOfCards, rangeValues, setRangeValues }}
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
