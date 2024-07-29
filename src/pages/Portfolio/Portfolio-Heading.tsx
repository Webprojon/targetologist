import { useTranslation } from "react-i18next";

export default function PortfolioHeading() {
	const { t } = useTranslation();
	return (
		<div className="text-center font-bold text-black/90">
			<h1 className="text-[25px] xs:text-[28px] sm:text-[34px] lg:text-[58px]">
				<span className="border-b-2 border-blue-600">{t("portf-h1-span")}</span>{" "}
				{t("portf-h1")}
			</h1>
			<p className="xs:text-[18px] sm:text-[20px] lg:text-[21px] sm:w-[34rem] lg:w-[37rem] mx-auto mt-2 xs:mt-5 lg:mt-6 lg:leading-8">
				{t("portf-p")}
			</p>
		</div>
	);
}
