interface PortfolioButtonProps {
	numberOfCards: number;
	setNumberOfCards: (newNumber: number) => void;
}

export default function PortfolioButton({
	numberOfCards,
	setNumberOfCards,
}: PortfolioButtonProps) {
	return (
		<button
			onClick={() => setNumberOfCards(24)}
			className={`mx-auto mt-[6rem] text-white font-bold tracking-wider rounded-[30px] bg-blue-600 py-[1rem] text-xl px-10
					 hover:bg-blue-700 transition-all ${numberOfCards > 10 ? "hidden" : "block"}`}
		>
			Больше кейсов
		</button>
	);
}
