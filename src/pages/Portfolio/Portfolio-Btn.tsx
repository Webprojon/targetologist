import { useGlobalContext } from "../../context/global-context";

export default function PortfolioButton() {
	const { numberOfCards, setNumberOfCards } = useGlobalContext();
	return (
		<button
			onClick={() => setNumberOfCards(24)}
			className={`mx-auto mt-[6rem] text-white font-bold tracking-wider rounded-[30px] bg-blue-500 py-[1rem] text-xl px-10
					 hover:bg-blue-600 transition-all ${numberOfCards > 10 ? "hidden" : "block"}`}
		>
			Больше кейсов
		</button>
	);
}
