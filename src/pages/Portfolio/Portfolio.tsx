import PortfolioCards from "./Portfolio-Cards";
import PortfolioButton from "./Portfolio-Btn";
import PortfolioHeading from "./Portfolio-Heading";

export default function Portfolio() {
	return (
		<section
			id="portfolio"
			className="scroll-mt-20 flex flex-col justify-center my-8 max-w-[320px] mx-auto xs:max-w-[460px] sm:max-w-[625px] md:scroll-mt-0 md:max-w-[925px] lg:max-w-[1495px]"
		>
			<PortfolioHeading />

			<PortfolioCards />

			<PortfolioButton />
		</section>
	);
}
