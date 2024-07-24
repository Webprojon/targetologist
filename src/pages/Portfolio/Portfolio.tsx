import { useState } from "react";
import PortfolioCards from "./Portfolio-Cards";
import PortfolioButton from "./Portfolio-Btn";
import PortfolioHeading from "./Portfolio-Heading";

export default function Portfolio() {
	const [numberOfCards, setNumberOfCards] = useState<number>(10);

	return (
		<section
			id="portfolio"
			className=" flex flex-col justify-center my-8 max-w-[1495px] mx-auto"
		>
			<PortfolioHeading />

			<PortfolioCards numberOfCards={numberOfCards} />

			<PortfolioButton
				numberOfCards={numberOfCards}
				setNumberOfCards={setNumberOfCards}
			/>
		</section>
	);
}
